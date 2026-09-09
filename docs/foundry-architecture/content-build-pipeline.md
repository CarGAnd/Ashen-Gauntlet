# Content Build Pipeline

## Purpose

This document defines the first source-to-Foundry vertical slice for development Scene content. The files under `scenes/` remain canonical authored source. Generated module artifacts and World documents are replaceable outputs.

## Development Scene flow

```text
scenes/development/dev01-scene-pipeline/scene.yaml
+ scenes/development/dev01-scene-pipeline/map/blueprint.json
-> tools/foundry-import/build-development-scene.mjs
-> module diagnostic map and Scene payload
-> Foundry V13 public compendium and document APIs
-> World development Scene compendium
-> explicit Scene import by the GM
```

Run the deterministic build from the project root:

```powershell
node tools/foundry-import/build-development-scene.mjs
```

The build produces:

- `foundry-module/ashen-gauntlet/assets/maps/development/dev01-scene-pipeline.svg`
- `foundry-module/ashen-gauntlet/content/development/scenes/dev01-scene-pipeline.json`

The SVG is a diagnostic representation of the blueprint rather than a Dungeondraft source or artistic map. The JSON is a generated Foundry V13 Scene payload. Both may be regenerated and must not replace or become more authoritative than the files under `scenes/`.

## Compendium synchronization

The module does not fabricate or commit a Foundry-owned compendium database. When the World reaches the `ready` hook, the active GM client uses documented Foundry V13 APIs to create or find a World Scene compendium with:

- Label: `The Ashen Gauntlet - Development Scenes`
- Technical name: `ashen-gauntlet-development-scenes`
- Collection ID: `world.ashen-gauntlet-development-scenes`
- Document type: `Scene`

The module finds the Scene by the stable authored ID stored in `flags.ashen-gauntlet.sourceId`. A deterministic source hash prevents unnecessary updates and allows a rebuilt payload to update the existing compendium entry without relying on its Foundry-generated document ID.

If the pack is locked when an update is required, synchronization stops and reports an error instead of changing the lock state.

## Locating and importing the Scene

1. Start Foundry VTT Version 13 Build 351 and open a World where The Ashen Gauntlet module is enabled.
2. Log in as the active GM and reload the World once so the module can synchronize the development compendium.
3. Open the **Compendium Packs** sidebar tab.
4. Open **The Ashen Gauntlet - Development Scenes**.
5. Locate **Development Scene Pipeline**.
6. Import the entry through the compendium entry context menu, or drag it into the World Scenes directory.
7. Open the imported Scene from the **Scenes** sidebar tab. Its background should show the diagnostic 20-by-24-cell layout.

Importing creates an ordinary World Scene through Foundry. Later module synchronizations update the compendium source entry, not any Scene already imported into the World.

## Safety boundaries

- No build step reads or writes `Data/worlds`.
- World documents and the World compendium are created only by Foundry through public V13 APIs.
- Dungeondraft integration is not part of this slice.
- Spotlight zones remain blueprint metadata only and have no runtime behavior.
- No campaign system or simulation logic is included.

