# Dungeondraft Integration Spike

This directory contains the project-local, experimental integration with the external `dungeondraft-mcp` project. It does not contain campaign map source and does not participate in the Foundry module runtime.

- `vendor/dungeondraft-mcp/` is the pinned upstream Git submodule.
- `.venv/` is the ignored project-local Python environment.
- `config/` records the bridge endpoint used by the local setup.
- `mods/` is the project-controlled Dungeondraft mods folder. The prepared bridge copy is generated and ignored.
- `scripts/` contains setup helpers.
- `tests/` contains non-mutating connectivity checks.
- `docs/` records third-party dependency and licensing details.

See `docs/development/dungeondraft-integration.md` for the complete setup and operating procedure.
