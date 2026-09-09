# Naming Conventions

## Technical identifiers

Use lowercase kebab-case for technical IDs, scene package directory names, and authored filenames. A scene package directory should use the same stable ID recorded in its `scene.yaml` and map blueprint.

Valid scene ID examples:

- `dev01-scene-pipeline`
- `j01-eastern-aqueduct`
- `r01-broken-sanctum`
- `h01-ash-gallery`
- `u01-upper-ascent`
- `c01-crucible-approach`

These are naming examples, not a complete or committed campaign scene list.

## Human-facing names

Human-facing scene names, headings, and labels may use normal capitalization and spacing, such as `Development Scene Pipeline`.

## Stable identity

- Keep the authored scene ID stable after content begins depending on it.
- Use the authored ID in deterministic generated or exported filenames where practical.
- Store a Foundry-generated Scene ID separately as `foundrySceneId` when it becomes known.
- Never use a Foundry runtime identifier as the only identifier for authored content.

