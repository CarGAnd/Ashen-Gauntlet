# Scene Content Model

## Purpose

The scene content model separates stable authored intent, distributable module content, and mutable live campaign state. This prevents Foundry runtime data from becoming the only copy of project knowledge.

| Layer | Location | Responsibility |
| --- | --- | --- |
| Authored Source | `scenes/` | Canonical scene identity, narrative intent, encounter and journal sources, map blueprints, references, and reproducible Foundry configuration. |
| Runtime Module Content | `foundry-module/ashen-gauntlet/` | Packaged assets and content distributed or loaded by The Ashen Gauntlet module. |
| World Runtime State | Foundry World | Live, changing state created during preparation and play, including temporary or campaign-specific document changes. |

## Authored Source

Every major scene is represented by a scene package under `scenes/`. Its stable technical ID is independent of any Foundry-generated identifier. Scene-specific metadata, maps, journals, encounters, references, and Foundry enrichment definitions remain colocated in that package.

## Runtime Module Content

Packaged maps, assets, compendia, and other module-delivered content belong under `foundry-module/ashen-gauntlet/`. Runtime module content is produced from or reconciled with authored source; it does not replace the authored scene package.

## World Runtime State

A live Foundry World owns mutable state created while preparing and running the campaign. That state is operational data, not canonical project source. Foundry document IDs may be recorded as mappings when useful, but they must never become the only way authored content is identified.

## Tooling boundary

Future tooling may import or update module content through documented public Foundry V13 APIs and supported import paths. It must not directly edit Foundry World databases under `Data/worlds`.

