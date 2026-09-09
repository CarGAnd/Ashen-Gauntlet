# Scene Pipeline

## Purpose

This document defines the intended path from an authored scene concept to live use in a Foundry World. It describes ownership boundaries only; no generation or import automation exists yet.

## Workflow

```text
Authored scene concept
-> scene.yaml
-> map blueprint
-> Dungeondraft draft
-> human artistic pass
-> Dungeondraft export
-> Foundry Scene import
-> Foundry enrichment
-> live World use
```

1. **Authored scene concept:** Establish the scene's intent without creating runtime state.
2. **`scene.yaml`:** Record stable identity, authored metadata, and the path to the map source.
3. **Map blueprint:** Describe the minimum structured layout needed by future tooling.
4. **Dungeondraft draft:** Produce an editable visual map from the blueprint or by hand.
5. **Human artistic pass:** Refine composition, assets, lighting intent, and presentation in Dungeondraft.
6. **Dungeondraft export:** Create deterministic map assets suitable for Foundry import.
7. **Foundry Scene import:** Import the exported map through supported Foundry V13 workflows or future repository tooling.
8. **Foundry enrichment:** Apply reproducible Scene configuration, Regions, walls, lights, sounds, notes, and other supported metadata.
9. **Live World use:** Use the imported Scene during play, where mutable campaign state may accumulate.

## Canonical boundaries

- The Dungeondraft source file is canonical for visual map editing.
- Foundry runtime Scene data is not canonical authored source.
- Repository tooling must never edit databases under `Data/worlds` directly.
- Scene-specific journals, encounters, map references, and Foundry configuration remain associated with their scene package under `scenes/`.
- Changes made only in a live World must be deliberately reconciled into authored source if they should become reusable project content.

