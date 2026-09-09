# Development Scene Pipeline

This scene package is a deliberately simple, development-only example for validating how authored scene files remain associated through future map generation, Foundry import, and enrichment tooling. It is not campaign lore and is not intended for live play.

## File purposes

- `scene.yaml` is the canonical high-level authored metadata for this scene. It does not store live campaign state.
- `overview.md` explains the scene package and the role of each colocated file.
- `encounter.md` is reserved for authored encounter intent associated with this scene.
- `journals.md` is reserved for authored journal content associated with this scene.
- `map/blueprint.json` is the minimal structured description of the test map layout.
- `map/references/` is reserved for approved visual references specific to this scene.
- `foundry/scene-config.json` is reserved for reproducible Foundry V13 Scene configuration.
- `foundry/regions.json` is reserved for authored Foundry V13 Region definitions.
- `foundry/notes.md` records Foundry-specific enrichment and import notes that do not belong in runtime World databases.

## Test layout

The blueprint describes a southern entrance, a central chamber, a northern exit, and a side chamber. It also includes one secret connection, one terrain feature, one tactical zone, and one Spotlight-designated zone solely to exercise future pipeline concepts.

