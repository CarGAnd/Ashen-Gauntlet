# Dungeondraft Integration

## Scope

This is the project-local Dungeondraft authoring integration. It does not change Foundry functionality or campaign scene source, and it is not a production map-generation pipeline.

## Architecture

```text
Codex
    | registered project-scoped Dungeondraft MCP tools
    v
Dungeondraft MCP server in the project .venv
    | newline-delimited JSON over TCP 127.0.0.1:8787
    v
MCP Bridge mod inside Dungeondraft
    | documented Dungeondraft modding API calls
    v
currently open Dungeondraft map
```

At the authoring level, the standard workflow is `Codex -> registered project-scoped Dungeondraft MCP tools -> localhost bridge -> running Dungeondraft instance`. Codex must invoke the registered project-scoped Dungeondraft MCP tools directly for ordinary map reads and writes. The bridge protocol is request/response JSON, one UTF-8 object per line. The Dungeondraft mod binds only to `127.0.0.1:8787`. The Python server is a stdio MCP server and is explicitly configured to connect only to that same loopback endpoint.

Do not use this wrapper workflow for ordinary authoring when the registered tools are available:

```text
Codex
    | PowerShell or Python wrapper
    v
manually created MCP client
    | MCP over stdio
    v
localhost bridge
```

Shell-based MCP fallback is allowed only when the registered server is unavailable or a required operation demonstrably cannot be performed through its tools. Codex must explain the technical reason before using that fallback.

## External dependency

The upstream dependency is the MIT-licensed `brann-dev/dungeondraft-mcp` repository. It is referenced as a Git submodule at `tools/dungeondraft/vendor/dungeondraft-mcp/` and pinned to commit `c5984a36f1be3f77b8f3be41d44a515f763797fd`.

Clone the repository and initialize the dependency with:

```powershell
git submodule update --init --recursive
```

The upstream source is not modified. Its full license remains in the submodule, and the local mod preparation step copies the license beside the prepared mod.

## Python environment

The local installation uses Python 3.11.9, which satisfies the upstream Python 3.10 or newer requirement. The ignored environment is:

```text
tools/dungeondraft/.venv/
```

Recreate the editable installation from the project root with:

```powershell
py -3.11 -m venv tools/dungeondraft/.venv
tools\dungeondraft\.venv\Scripts\python.exe -m pip install -e tools\dungeondraft\vendor\dungeondraft-mcp\server
```

The editable install exposes `tools/dungeondraft/.venv/Scripts/dungeondraft-mcp.exe`. No Python environment files are committed.

## Dungeondraft mod setup

Dungeondraft 1.2.0.1 is installed locally at `D:\VTT\FoundryStuff\Dungeondraft\Dungeondraft.exe`.

Prepare the bridge mod from the pinned submodule:

```powershell
tools\dungeondraft\scripts\Install-BridgeMod.ps1
```

This creates the ignored, reproducible directory:

```text
tools/dungeondraft/mods/dungeondraft-mcp-bridge/
```

Then complete these steps manually in Dungeondraft:

1. From the Dungeondraft title screen, open `Mods`.
2. Set the mods folder to `D:\VTT\FoundryVTT-Campaigns\Ashen Gauntlet\tools\dungeondraft\mods`.
3. Enable `MCP Bridge` in the mod list.
4. Restart or reload Dungeondraft if it requests this.
5. Create or open a disposable test map. Do not use an authored or production map for the spike.
6. Confirm the Dungeondraft log contains `MCP Bridge` listening on `127.0.0.1:8787` with protocol version 6.

No files are copied into the default user-profile mods directory by repository tooling.

## Codex MCP setup

The installed Codex CLI is `codex-cli 0.153.4`. Its local `codex mcp --help` and `codex mcp add --help` commands confirm stdio server registration and environment variables. Current official Codex documentation supports trusted-project MCP configuration in `.codex/config.toml`, so this integration uses the project-scoped file rather than editing the user-level Codex configuration outside the repository.

`.codex/config.toml` launches the project virtual-environment entrypoint with these fixed values:

```text
DD_BRIDGE_HOST=127.0.0.1
DD_BRIDGE_PORT=8787
```

The server is optional at Codex startup and uses the `approve` tool approval mode. Dungeondraft MCP tools are intentionally pre-approved for this project because the bridge is a dedicated localhost map-authoring integration. This project-level approval applies only to the configured `dungeondraft` MCP server; explicit user restrictions such as read-only or inspection-only tasks still take precedence.

If this repository is moved, update the absolute `command` and `cwd` paths in `.codex/config.toml`. Restart Codex after creating or changing the configuration, then use `/mcp` or `codex mcp get dungeondraft` to inspect it.

## Startup order

1. Initialize the Git submodule and recreate the Python environment if required.
2. Prepare the project-local mod directory.
3. Start Dungeondraft.
4. Enable the MCP Bridge mod and open a disposable test map.
5. Confirm the bridge listening message in the Dungeondraft log.
6. Restart Codex from this trusted project so it loads `.codex/config.toml`.
7. Use the registered MCP tools to run the non-mutating smoke test before asking Codex to change the map.

## Non-mutating smoke test

Ask Codex to invoke the registered Dungeondraft MCP `ping` and `get_status` tools directly. The calls create, change, and delete nothing. Expect `ping` to succeed, protocol information to be returned, and `get_status` to report `map_open: true` when a map is open.

The project also retains this PowerShell connectivity test as a fallback diagnostic:

```powershell
tools\dungeondraft\tests\Test-DungeondraftBridge.ps1
```

Do not use this wrapper for routine Dungeondraft operations. Use it only when the registered tools are unavailable, after explaining why the fallback is necessary. The test sends only `ping` and `get_status` and does not mutate the map.

Do not run the upstream `server/test_bridge.py` or `server/demo_build.py` against an existing map. The former creates and removes test content, and the latter deliberately leaves content behind.

## Map-operation workflow

When a user requests map creation or modification, Codex may perform the necessary registered MCP write operations sequentially without per-operation confirmation. Explicit restrictions such as read-only, do not modify, do not delete, or do not save always take precedence.

Routine verification uses structured MCP results: `get_status`, `list_elements`, returned element IDs, coordinates, dimensions, and operation success. Screenshots are user-driven validation by default, not part of the automated generation loop. Codex should take a screenshot automatically only when structured results indicate an ambiguous or unexpected failure and visual inspection is genuinely needed for diagnosis.

Routine reports should describe structural verification and remain concise. Codex must not claim visual inspection unless it actually inspected an image.

## Troubleshooting

- Connection refused: Dungeondraft is not running, the mod is not enabled, a map has not loaded, or the mod folder setting points elsewhere. Confirm the listening log line first.
- No map open: open a disposable map, then rerun the query-only test.
- Port already in use: identify the local process using port 8787. Do not change either endpoint independently; the integration intentionally fixes both sides to `127.0.0.1:8787`.
- MCP server missing in Codex: confirm the project is trusted, the virtual environment exists, the absolute paths in `.codex/config.toml` still match the project, and Codex has been restarted.
- Python entrypoint missing: recreate the virtual environment and repeat the editable install.
- Submodule directory empty: run `git submodule update --init --recursive`.
- Mod changes not visible: reload the mod or restart Dungeondraft. This spike does not modify the upstream mod.

## Disable or remove

To disable the integration without deleting files, set `enabled = false` for `[mcp_servers.dungeondraft]` in `.codex/config.toml`, restart Codex, and disable `MCP Bridge` in Dungeondraft.

To remove the local generated state, close Dungeondraft and Codex, then remove only `tools/dungeondraft/.venv/` and `tools/dungeondraft/mods/dungeondraft-mcp-bridge/`. Both are reproducible and ignored. Removing the pinned submodule or project configuration is a separate repository change and should be done deliberately.
