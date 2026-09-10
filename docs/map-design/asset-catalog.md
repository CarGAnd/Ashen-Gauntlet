# Dungeondraft Asset Catalog

## Purpose

The project-owned asset catalog prevents map generation from guessing Dungeondraft asset paths. It stores metadata and stable semantic mappings only. Dungeondraft image assets and commercial asset binaries are not copied into this repository.

## Resolution flow

```text
Scene blueprint
-> semantic asset requirement
-> scene-specific asset override, when explicitly defined
-> active theme/profile mapping
-> general semantic classification mapping
-> raw catalog search, only when no mapping exists
-> exact Dungeondraft asset URI
-> compatible registered MCP operation
```

A scene blueprint requests a semantic concept or project semantic ID such as `wall.stone.basic`. Scene-specific overrides and theme profiles choose visual treatment without placing exact asset URIs in the blueprint. The classification catalog resolves the semantic ID to an exact Dungeondraft URI and records the compatible MCP operation. Only the final resolved URI is passed to the registered Dungeondraft MCP tool.

Semantic IDs belong to The Ashen Gauntlet and remain stable when a Dungeondraft URI changes. Exact Dungeondraft URIs belong only in the catalog and profile layer, not in scene blueprints or general map-generation logic.

## Resolution hierarchy

Normal map generation must resolve assets in this order:

1. Use a scene-specific asset override when one is explicitly defined.
2. Use the active theme or profile mapping.
3. Use the general semantic classification mapping.
4. Search the raw Dungeondraft asset catalog when no suitable mapping exists.
5. Report that no suitable asset is available.

Never skip directly to a guessed or fabricated URI. Prefer an existing validated semantic mapping over a newly discovered alternative unless the requested scene explicitly needs a different visual treatment.

Blueprint geometry describes gameplay and spatial intent. Asset profiles describe visual art direction. Catalog entries resolve semantic concepts to exact Dungeondraft assets. The registered Dungeondraft MCP tools perform the actual map mutation after resolution is complete.

## Files

- `maps/asset-catalog/raw/dungeondraft-built-in-assets.csv` is the searchable read-only discovery snapshot.
- `maps/asset-catalog/raw/manifest.json` records scope, counts, discovery provenance, and limitations.
- `maps/asset-catalog/classifications/core.json` contains the initial curated semantic mappings.
- `maps/asset-catalog/classifications/volcanic-v1.json` contains campaign-facing volcanic, Jungle, ruin, dwarven, elven, burrow, elevation, and lighting mappings discovered in the raw catalog; live MCP re-confirmation is required before promotion to `confirmed-by-mcp-list-assets`.
- `maps/asset-catalog/profiles/development.json` selects known-good development defaults.
- `maps/asset-catalog/profiles/ashen-volcano-v1.json` defines the first production-planning visual profile using semantic IDs only.

The raw CSV contains one row per discovered asset. Empty tag and dimension fields mean that the bridge did not expose those values; they are not guesses.

## Role of the raw catalog

The 1,947-asset raw catalog is a discovery source, not the normal vocabulary for map-generation prompts. Scene blueprints, design instructions, and ordinary generation requests should use semantic concepts or stable semantic IDs.

Consult the raw catalog only when the scene-specific override, active profile, and general semantic mappings do not satisfy a requirement. A raw URI selected for a one-off treatment remains an implementation detail. When the asset represents a concept likely to be reused, add a semantic mapping before relying on that URI in future map generation.

## Discovery mechanism

The pinned `dungeondraft-mcp` server exposes `list_asset_categories` and `list_assets`. The bridge implements those calls with Dungeondraft's `Script.GetAssetList(category)`, then applies an optional case-insensitive substring match to the returned URI. This is a supported loaded-asset-registry lookup and does not require map mutation.

The current bridge exposes:

- Authoritative asset categories.
- Exact loaded asset URIs.
- URI substring search.
- Category as a practical asset type.

The current bridge does not expose:

- Original Dungeondraft tags or tag-based search.
- Texture dimensions, authored scale, or recommended placement scale.
- A built-in/custom provenance flag.
- Custom pack ID, name, author, version, keywords, path, license, or third-party-use metadata.
- A dedicated validate-asset call.

An asset returned by `list_assets` is therefore marked as available in the loaded registry. This is read-only availability validation, not visual or placement validation.

## Built-in and custom assets

The initial raw catalog includes URIs under `res://textures/`, classified as built-in Dungeondraft assets. The same `Script.GetAssetList` mechanism returns the assets available to the loaded registry, so loaded custom assets can be URI-indexed when they appear.

The bridge cannot currently associate a returned URI with a custom pack or expose pack metadata. If that distinction becomes necessary, the smallest extension is a read-only bridge query that returns active asset-pack metadata and relates each registered URI to its pack. That extension belongs upstream or in a deliberately maintained project patch; this task does not modify the pinned dependency.

## Classification policy

Do not semantically classify the complete raw inventory by hand. Add stable mappings when a scene or generator needs them.

Each mapping must:

1. Use a project-owned semantic ID.
2. Preserve the exact URI returned by Dungeondraft.
3. Record the original Dungeondraft category.
4. List only compatible MCP operations.
5. Be confirmed with a read-only `list_assets` query before its validation status is changed to `confirmed-by-mcp-list-assets`.

Names and project tags are project metadata. They must not be presented as original Dungeondraft tags unless the bridge later exposes authoritative tag data.

## Introducing reusable mappings

```text
Raw asset discovery
-> semantic classification
-> optional theme/profile preference
-> use in map generation
```

Introduce a mapping only when the discovered asset represents a useful reusable concept. Do not expand the curated catalog merely to increase its mapping count.

1. Search the raw catalog and confirm the exact URI and Dungeondraft category.
2. Add a stable project-owned semantic ID to the appropriate classification file.
3. Record the compatible MCP operations and validate availability through read-only asset discovery.
4. Add a scene, theme, or profile preference only when that art direction needs to override the general mapping.
5. Refer to the semantic concept or semantic ID during map generation and resolve the exact URI only at the catalog/profile boundary.

Existing semantic IDs should remain stable. Change one only when it is demonstrably incorrect, and update every profile and document reference as part of the same change.

## Regeneration

Regenerate the raw catalog through the registered Dungeondraft MCP tools:

1. Call `list_asset_categories`.
2. Call `list_assets` for every returned category with a limit high enough to equal `total`.
3. Preserve exact returned URIs and category names.
4. Record bridge-unavailable fields as empty.
5. Do not place assets, alter the open map, or use filesystem discovery as a substitute.

Review catalog changes before accepting them because installed Dungeondraft versions and loaded custom packs can change the available registry.
