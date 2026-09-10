# Development Rules

- Treat this repository as the canonical source for The Ashen Gauntlet.
- Do not modify files outside the project root unless explicitly instructed.
- Do not directly edit Foundry world databases under `Data/worlds`.
- Prefer documented public Foundry VTT APIs.
- Target Foundry VTT Version 13 Build 351.
- Do not use Foundry VTT 14-only APIs or features unless explicitly approved.
- When Foundry behavior is version-specific, use V13 documentation/API assumptions.
- Avoid private/internal Foundry APIs where a documented V13 public API is available.
- Keep campaign logic modular.
- Favor, Spotlight, Sponsor, Gem, and contestant systems should eventually be implemented as distinct services or modules rather than tightly coupled scripts.
- Keep Dungeondraft source files separate from Foundry runtime map assets.
- Commercial or externally licensed Dungeondraft asset packs must not be copied into this repository unless explicitly approved.
- Generated and exported assets must have deterministic and understandable filenames.
- Every authored major scene gets its own scene package.
- Scene-specific content should remain colocated.
- Runtime Foundry identifiers must never become the only identifier for authored content.
- Dungeondraft source maps remain development source assets, not Foundry runtime assets.
- Map blueprint formats should remain backward-compatible where practical once real campaign content begins using them.
- Generated Foundry content must be reproducible from authored source.
- Generated runtime artifacts must not replace canonical scene source.
- World database files must never be directly generated or edited.

## Dungeondraft authoring

- Use the registered Dungeondraft MCP tools directly for all ordinary Dungeondraft map reads and writes.
- Do not create a separate MCP client through Python, PowerShell, Node, or another shell command when the registered MCP server is available.
- Do not route ordinary Dungeondraft operations through terminal commands merely because the same operations can be performed that way.
- Multiple Dungeondraft write operations belonging to one requested map-editing task may be performed sequentially without asking for per-operation confirmation.
- Ordinary operations include creating, moving, modifying, and deleting rooms, walls, paths, portals, terrain, lights, objects, roofs, and other map elements when required by the requested map work.
- Explicit user restrictions such as "read only", "do not modify", "do not delete", or "do not save" always take precedence.
- Shell-based MCP fallback is permitted only when the registered Dungeondraft MCP server is unavailable or a required operation demonstrably cannot be performed through the registered tools.
- If shell fallback becomes necessary, explain the technical reason before using it.

## Dungeondraft asset catalog

### Asset resolution

- Dungeondraft map generation must resolve visual assets through The Ashen Gauntlet asset catalog whenever a suitable semantic mapping exists.
- Scene blueprints and map-design instructions should refer to semantic concepts or semantic asset IDs rather than hard-coded Dungeondraft asset URIs.
- Exact Dungeondraft asset URIs belong in the asset catalog and asset-profile layer.
- Do not guess or fabricate Dungeondraft asset URIs.
- Do not hard-code known Dungeondraft asset URIs directly into scene blueprints.
- A scene or theme-specific asset profile should be consulted before general semantic mappings.
- If a required asset has no existing semantic mapping, search the raw discovered asset catalog before choosing an asset.
- If a discovered asset represents a reusable concept, add a semantic mapping rather than repeatedly using its raw URI directly.
- Prefer existing validated mappings over newly discovered alternatives unless the task explicitly calls for a different visual treatment.
- Do not copy Dungeondraft asset binaries into the repository merely to support catalog resolution.
- Commercial asset metadata may be indexed, but commercial asset binaries must not be copied into the repository without explicit approval.

### Resolution order

Use this order for normal map generation:

1. Scene-specific asset override when explicitly defined.
2. Active theme/profile mapping.
3. General semantic classification mapping.
4. Search the raw Dungeondraft asset catalog.
5. Report that no suitable asset is available.

Never skip directly to a guessed URI.

### Map authoring responsibilities

- Blueprint geometry describes gameplay and spatial intent.
- Asset profiles describe visual art direction.
- Asset catalog entries resolve semantic concepts to Dungeondraft assets.
- Dungeondraft MCP performs the actual map mutation.

## Verification

- Do not take screenshots after ordinary Dungeondraft operations unless the user explicitly requests visual verification.
- Do not use screenshots as the normal validation mechanism for map generation.
- Do not create temporary screenshot files simply for routine verification.
- Validate ordinary map operations using structured MCP results such as `get_status`, `list_elements`, returned element IDs, coordinates, dimensions, and operation success.
- The user will normally perform visual inspection directly in Dungeondraft.
- If the user reports that something looks wrong, use their screenshot or description to make corrections.
- A screenshot may be taken automatically only when structured MCP results indicate an ambiguous or unexpected failure and visual inspection is genuinely necessary to diagnose it.

## Reporting

- Do not claim "visual inspection confirmed" unless an image was actually inspected.
- For ordinary successful map edits, report structural verification instead, for example: "The requested geometry was created and verified through Dungeondraft element state."
- Keep map-operation reports concise unless troubleshooting is required.
