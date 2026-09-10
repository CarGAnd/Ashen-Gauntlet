# The Ashen Gauntlet: Volcanic Visual Profile V1

Status: Approved production-planning baseline. This defines shared art direction before scene-specific Dungeondraft work. Geographic display names remain provisional.

## Purpose

The volcano should look like one physical mountain containing many historical and ecological layers, not a sequence of unrelated themed dungeons.

The shared machine-readable profile is `maps/asset-catalog/profiles/ashen-volcano-v1.json`. New reusable mappings live in `maps/asset-catalog/classifications/volcanic-v1.json` and supplement `classifications/core.json`.

Exact asset URIs remain confined to classification files. Scene blueprints request semantic IDs or visual concepts.

## Global Visual Principles

1. **Geology comes first.** Basalt, faults, water erosion, ash, roots, heat and elevation remain visible beneath every civilization.
2. **History overlaps.** Dwarven, elven, ancient and creature-made layers should visibly cut through, reuse, bury or expose one another.
3. **Route identity is visual.** A player should often infer “engineered,” “ecological,” “burrow,” or “strange” before reading a label.
4. **Playable space stays readable.** Dense detail belongs around route edges, elevations and landmarks rather than covering every tactical square.
5. **Altitude is communicated, not decorative.** Ledges, stairs, drops, bridges and terraces should affect movement, sightlines or route choice when prominently shown.

## Jungle Volcanic Stone

Exterior rock is predominantly dark charcoal basalt. Older wet faces are rounded, mossed and water-polished; younger breaks are jagged, dry and ash-dusted.

Use `terrain.volcanic.rocky` and `terrain.volcanic.gravel` as the geological base, with `terrain.jungle.moss`, `terrain.jungle.dirt` and `terrain.jungle.swamp` reclaiming sheltered surfaces. `material.volcanic.rock` is reserved for exposed hard-rock features rather than painting whole exterior maps uniformly.

Large basalt shapes should organize movement: shelves, clefts, ribs, stream cuts, boulder fields and narrow saddles. Avoid generic circular clearings surrounded by decorative rocks.

## Vegetation

The Jungle Ring should feel humid and abundant without becoming visually unreadable. Use large trees and roots to create navigational walls, partial cover, elevation anchors and route frames.

Primary semantic assets are `vegetation.tree.massive`, `vegetation.tree.mangrove`, `vegetation.root.exposed`, `vegetation.fern` and `vegetation.moss.swamp`.

Vegetation density should vary deliberately: dense edges and canopy masses, medium transitional undergrowth, and comparatively clean tactical/travel lanes. Repeated identical tree spacing should be avoided.

Roots are especially important because they can bridge geology and civilization: cracking masonry, forming natural ladders, sealing doors, or revealing old structures.

## Water

Water should look mineral-rich, dark and terrain-shaping rather than bright decorative blue. Exterior streams carve basalt, collect silt and roots, and often create the actual route geometry.

Large river, pool and lake surfaces are treated as a native Dungeondraft water-layer requirement rather than assigned a fabricated texture URI. The current raw asset catalog does not contain a general-purpose broad water-surface asset. `water.detail.swamp-puddle` is only for localized wet detail.

In elven areas, water becomes visibly controlled: channels, ponds, spillways, cistern-like basins and deliberate reflections. In dwarven areas it is functional infrastructure: drains, aqueducts, sluices and reservoirs. In the Buried Kingdom it is invasive and silting.

## Ancient Ruins

The oldest human or pre-volcanic settlement layer should read as weathered civic stone rather than dwarven engineering.

Use `ruin.floor.roman-worn`, `ruin.floor.worn-cobble`, `floor.stone.basic`, `ruin.debris.basic` and `rubble.basic`. Geometry may once have been orderly, but surviving fragments should be interrupted by ash deposits, subsidence, roots, water and later intrusions.

The Buried Kingdom should feel preserved and entombed: partial streets, thresholds, courtyards and domestic footprints disappearing into ash or stone. Avoid making every ancient site a monumental temple.

`ruin.floor.roman-worn` is visually provisional. Its semantic role is accepted and the asset is catalog-valid, but the first Dungeondraft inspection must confirm that it reads as this campaign's ancient civic stone rather than as recognizably Roman or otherwise stylistically specific.

## Dwarven Construction

Dwarven work is the most legible engineered layer: heavy rectilinear geometry, deep load-bearing walls, broad service corridors, rails, pipes, machinery and visibly purposeful infrastructure.

Use `dwarven.wall.heavy`, `dwarven.floor.slab`, `dwarven.path.rail`, `dwarven.object.pipe`, `dwarven.object.gears` and `dwarven.object.forge`. General stone assets may supplement them, but the spatial language should remain massive and functional.

Damage should usually reveal how something once worked: a broken lift shaft, displaced rail, cracked aqueduct or seized mechanism. Avoid generic “dwarf = decorative forge room” treatment.

`dwarven.floor.slab` is visually provisional. The current concrete-slab texture is technically valid and may read correctly as massive dressed stone, but it must be judged in the first Dungeondraft visual pass and replaced if it appears modern, sterile, or insufficiently monumental.

## Elven Construction

Elven architecture should contrast through proportion and geometry rather than merely brighter colors. Use graceful curves, deliberate alignments, narrow bridges, controlled water, terraces, rotundas and spaces that feel designed around sightlines or celestial/geometric relationships.

Use `elven.floor.ornate`, `elven.object.bridge`, `elven.object.stairs`, `elven.object.rotonda` and `elven.object.vines`.

The visual language should remain pale, precise and integrated with living systems. Overgrowth may be intentional rather than neglect. Veiled Domain scenes can push this further into non-intuitive alignment, but ordinary Verdant engineering should still look physically understandable.

## Burrows and Creature-Made Space

Great Warren spaces should reject architectural symmetry. Curves should vary in width, double back, shear through older walls and occasionally create vertical shortcuts that make no cultural sense.

Use `burrow.floor.cave`, `terrain.jungle.dirt`, `terrain.volcanic.rocky`, `burrow.object.cave-hole`, `burrow.object.monster-bones` and `vegetation.root.exposed`.

Creature scale matters. A passage made by something enormous should not look like a normal cave corridor with monster bones added afterward. Wall abrasion, collapse pockets, displaced masonry and oversized turns should communicate how the tunnel was formed.

## Ash and Lava

Ash is a surface process as much as a prop. It should collect in lee pockets, depressions, ruined interiors and around airflow changes. Use `object.ash.pile` as detail over cracked earth, gravel or stone rather than as evenly repeated clutter.

Active lava uses `material.lava.surface`; exposed volcanic rock uses `material.volcanic.rock` and the existing `rock.lava.basic`. Bright lava should remain a localized threat and light source so it retains visual importance.

Heat transitions can be communicated before lava appears through cracked ground, dead vegetation, steam, soot, warm lighting and increasingly bare rock.

## Lighting

Lighting should reinforce route identity. Jungle scenes use diffuse canopy light with deeper shadow in ravines and under giant roots. Dwarven scenes use low ambient levels with warm surviving furnace, torch or machinery accents. Elven scenes favor cool/pale pools that emphasize geometry. Volcanic interiors use warm hazard glow against dark rock.

Reusable light textures are `light.soft.basic`, `light.point.basic` and `light.fragments.basic`. Color, radius and intensity remain scene parameters rather than semantic asset identity.

Avoid making every interior uniformly dark. Important route mouths, elevation changes and landmarks must remain readable on the battlemap even when the fiction is dim.

## Elevation

Elevation should be shown through terraces, cliff edges, stairs, bridges, contour-like terrain changes, shadows and route occlusion. Use `elevation.path.cliff` and `elevation.path.stairs-stone` where appropriate, supplemented by scene geometry.

A visually prominent ledge should normally matter mechanically: cover, line of sight, fall risk, access cost, alternate route or observation advantage.

For outdoor hubs, exits should preferably occupy different elevations or terrain relationships so route choice can be understood spatially rather than as three equal corridors.

## Layer Transitions

Transitions should usually occupy real playable space. A dwarven tunnel breaking into a buried street, roots opening an elven spillway, or a Warren shearing across a railway should visibly contain both layers for several grid squares.

Clean theme cuts are reserved for intact seals, magical boundaries, or deliberately isolated complexes. Otherwise the volcano should look historically entangled.

## Semantic Resolution Summary

| Visual requirement | Primary semantic IDs | Resolution |
|---|---|---|
| wet Jungle ground | `terrain.jungle.moss`, `terrain.jungle.dirt`, `terrain.jungle.swamp` | raw catalog mapped |
| volcanic shelves/talus | `terrain.volcanic.rocky`, `terrain.volcanic.gravel`, `material.volcanic.rock` | raw catalog mapped |
| dense Jungle growth | `vegetation.tree.massive`, `vegetation.tree.mangrove`, `vegetation.root.exposed`, `vegetation.fern`, `vegetation.moss.swamp` | raw catalog mapped |
| broad water | native water layer/operation | no general asset URI; operation must be confirmed before automation |
| ancient settlement | `ruin.floor.roman-worn`, `ruin.floor.worn-cobble`, `ruin.debris.basic` | mapped |
| dwarven infrastructure | `dwarven.wall.heavy`, `dwarven.floor.slab`, `dwarven.path.rail`, pipe/gears/forge semantics | raw catalog mapped |
| elven architecture | `elven.floor.ornate`, bridge/stairs/rotunda/vines semantics | raw catalog mapped |
| Warren/burrow | `burrow.floor.cave`, `burrow.object.cave-hole`, `burrow.object.monster-bones` | raw catalog mapped |
| ash/lava | `object.ash.pile`, `material.lava.surface`, `rock.lava.basic` | mapped |
| cliffs/stairs | `elevation.path.cliff`, `elevation.path.stairs-stone` | raw catalog mapped |
| shared lights | `light.soft.basic`, `light.point.basic`, `light.fragments.basic` | mapped |

## Current Catalog Gaps

The current built-in asset registry is sufficient for first-pass production, but it does not yet provide a dedicated semantic set for basalt cliff-face walls, flowing river surfaces, rich ash terrain, or specialized ancient/pre-volcanic architecture beyond worn generic stone.

Do not force inappropriate assets to fill these gaps. Use geometry, terrain blending and native Dungeondraft capabilities where possible. If a future scene requires a stronger reusable treatment, search the raw catalog again or introduce an approved asset pack and then extend the semantic catalog.

Before the first production Dungeondraft render, the new mappings in `volcanic-v1.json` should receive live read-only MCP confirmation and then have their validation status promoted according to `asset-catalog.md`.
