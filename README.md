# The Ashen Gauntlet

This repository is the canonical development source for **The Ashen Gauntlet**, a campaign project targeting Foundry Virtual Tabletop 14.

## Repository layout

- `foundry-module/ashen-gauntlet` is the runtime Foundry module. The local Foundry module directory is connected to this directory through a Windows junction.
- `scenes` contains authored scene source material, grouped by campaign location.
- `maps` contains Dungeondraft source maps, blueprints, exports, references, and asset metadata.
- `campaign` contains campaign-level narrative and mechanical definitions.
- `assets` contains source, generated, and reference assets used during development.
- `docs` contains campaign design, Foundry architecture, map design, and development documentation.
- `tools` contains build and integration tooling.
- `tests` contains project tests.

## Development boundary

Foundry runtime databases under `Data/worlds` must never be edited directly by repository tooling. Campaign content and module behavior should be developed from the canonical sources in this repository and imported through documented Foundry VTT APIs or purpose-built tooling.

