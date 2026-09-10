# Favor V1 — Foundry Runtime and GM UI Architecture

Status: Approved implementation architecture for Foundry VTT Version 13 Build 351. This document defines the technical contract; Codex owns production implementation.

## Architectural boundary

Authored canon remains in repository source. Mutable Favor standings and history belong to the active Foundry World.

Favor V1 must not write directly to `Data/worlds`, create ad-hoc database files, or treat runtime World state as authored lore.

The subsystem should have four separable responsibilities:

1. Authored organiser/team metadata loader.
2. Favor state service and validation/replay logic.
3. World persistence adapter.
4. GM-facing Favor application.

Later Spotlight and contestant-simulation systems consume the service through explicit interfaces rather than reaching into stored objects directly.

## Verified Foundry V13 UI concepts

The preferred GM pane base is `foundry.applications.api.ApplicationV2` combined with `foundry.applications.api.HandlebarsApplicationMixin`.

Use Handlebars application parts/templates for the pane rather than constructing a large UI through raw string concatenation.

A GM-only launch control may be added through the documented `getSceneControlButtons` hook. The V13 API documentation explicitly demonstrates a Scene Control tool that opens or closes an Application.

The application should be a normal resizable Foundry window, not a modal dialog, because the GM must keep maps and sheets usable while Favor remains open.

`DialogV2` may be used for small confirmations if useful, but the main Favor pane should remain its own ApplicationV2 window.
## Persistence contract

Register a hidden module world setting during `init`:

- Namespace: `ashen-gauntlet`.
- Key: `favorState`.
- Scope: `world`.
- Config: false.
- Type: object-compatible registered setting supported by V13.

Foundry World Setting values are serialized runtime state. Use `game.settings.get` and `game.settings.set`; do not access the underlying Setting database directly.

V1 state root:

```json
{
  "schemaVersion": 1,
  "revision": 0,
  "nextSequence": 1,
  "events": []
}
```

Derived standings, tiers, and trends are not authoritative persisted fields. They are recomputed from the event ledger.

If later profiling shows replay cost to be material, a cache may be added under a later schema version, but the ledger remains authoritative.

`revision` increments on every successful mutation and supports future concurrency safeguards. `nextSequence` supplies monotonic event ordering and must never be reduced by event editing or voiding.
## Mutation rules

Only the active GM may commit Favor changes in V1. Other GM clients may open the pane read-only. Player clients must not receive mutation controls.

Each committed change should:

1. Read the current `favorState`.
2. Validate its schema and invariants.
3. Clone it before modification.
4. Apply one logical operation: add, edit, or void an event.
5. Validate the candidate state and replay standings.
6. Increment `revision`.
7. Persist once with `await game.settings.set`.
8. Refresh open Favor panes from persisted state.

Do not persist incomplete forms or intermediate edits.

A failed write leaves the prior stored state authoritative and produces a GM-visible error.

UI code should call semantic state-service operations rather than modifying the storage object directly.
## Schema version handling

Favor V1 recognizes `schemaVersion: 1`.

If the registered setting is still at its default state, no synthetic history is created.

Any future conversion from an older known schema must produce and validate a complete in-memory result before replacing persisted state. Such conversion requires Systems Designer review before release.

If an unknown newer schema version is encountered, the Favor subsystem becomes read-only and displays a compatibility error rather than replacing the value.

## Event validation

Validation must reject:

- unknown `teamId` values;
- unknown or duplicated organiser IDs;
- missing summary text;
- non-integer base deltas or values outside -3..+3;
- zero-valued stored evaluations;
- missing rationale on simulated non-zero evaluations;
- invalid sequence values;
- voided events without a void reason;
- malformed Spotlight metadata.

Validation errors should identify the offending event and field where practical.
## GM Favor pane

Default window target: approximately 960 by 720 pixels, resizable, with normal Foundry window chrome.

The pane uses three tabs:

1. **Party** — default and highest-fidelity view.
2. **Rivals** — wider contestant field, lower visual priority.
3. **History** — searchable/filterable Favor ledger.

### Party tab

Show all Eight organisers together in a responsive two-row card grid where practical.

Each organiser card shows:

- portrait or fallback initials;
- organiser name and epithet;
- current numeric score;
- descriptive tier;
- rising/falling/mixed trend and recent net;
- compact `-1` and `+1` event-entry shortcuts;
- control to preselect that organiser in the full event composer.

Positive and negative direction must not depend on color alone. Include signed numbers, text/tier, and directional indicators.

Below or beside the cards, show the most recent player-team events with summary, affected organisers, and deltas.
### Event composer

The full composer opens in-pane or as a secondary non-modal application. It defaults to `teamId: pc` from the Party tab.

Required live-session fields:

- short event summary;
- optional details;
- tags;
- Spotlight active checkbox/context;
- organiser evaluation rows.

All Eight organisers are visible in the composer. Each row offers a delta selector from -3 to +3 with 0 meaning unaffected, plus optional organiser-specific rationale.

At least one non-zero organiser evaluation is required to save.

The composer should make multi-organiser comparison easy before commit: selected rows remain visibly distinct and a preview shows the resulting before/after score and tier for each affected organiser.

GM notes and campaign-time metadata are secondary/expandable fields so they do not slow ordinary live use.

Quick `+1` or `-1` opens a compact version with team, organiser, and delta prefilled. It still requires a short reason and supports expansion into the full composer.

Editing an event reuses the same form but clearly identifies that existing history is being changed and previews the recomputed effect.
### Rivals tab

The Rivals tab groups teams by fidelity:

- Primary rivals A-J expanded/accessible first.
- Background rivals K-X collapsed or summarized by default.

Each row shows team display name/slot, current overall relationship summary, and the Eight organiser scores in a compact matrix or expandable detail.

A single "overall" Favor score must never be invented. Any summary is visual only, such as count of Favored/Disfavored organisers or highest/lowest standing.

The first vertical slice may initialize rival standings and render the tab without implementing automatic off-screen event generation.

### History tab

History defaults to newest first and supports filters for team, organiser, source, tag, Spotlight state, and voided events.

Each collapsed event row shows sequence, summary, team, affected organisers, signed deltas, and source.

Expanded history shows details, organiser rationales, GM notes, Spotlight metadata, campaign time, simulation explainability, override flags, and void/correction status.

## Authored metadata

Codex may package a machine-readable organiser metadata file for the UI, but its content must be derived from canonical organiser source rather than becoming a separate lore authority.

At minimum it may contain stable organiser ID, display name, epithet, portrait path, short values/dislikes tooltip text, and sort order.
## Public Foundry V13 concepts permitted

Implementation should prefer these documented/public V13 concepts:

- `Hooks.once("init", ...)` and `Hooks.once("ready", ...)`.
- `Hooks.on("getSceneControlButtons", ...)` for the launch tool.
- `foundry.applications.api.ApplicationV2`.
- `foundry.applications.api.HandlebarsApplicationMixin`.
- Handlebars application `PARTS` and templates.
- `game.settings.register`, `game.settings.get`, and `game.settings.set`.
- `game.user.isGM` and the existing project pattern using `game.user.isActiveGM` for mutation authority.
- `foundry.utils.deepClone` and `foundry.utils.randomID` where suitable.
- `ui.notifications` for GM-visible success/error feedback when appropriate.

Do not substitute V14-only APIs because they appear similar. Codex must validate signatures against V13 before use.

## Future contestant state integration

Do not store contestant movement state inside `favorState`.

A later separate world-state domain should be keyed by the same stable team IDs and own current/previous node, intended destination, objective, condition, movement history, route knowledge, gem inventory, relationships, and last simulation tick.

Favor may read that domain through an adapter when generating off-screen events. It may not become authoritative for any of those fields.

Spotlight should likewise pass context into Favor event evaluation rather than directly rewriting Favor storage.
## Favor V1 Foundry acceptance criteria

The first implementation milestone passes when, in Foundry VTT 13 Build 351:

1. An active GM can open the Favor pane from a documented GM-facing control.
2. The Party tab shows all Eight organisers simultaneously with score, tier, and trend.
3. A new World initializes the player team's eight standings at 0 without synthetic history.
4. The GM can create one event affecting multiple organisers with different deltas.
5. Saving the event persists once and immediately updates all affected standings.
6. Closing and reopening the pane preserves the same state.
7. Reloading the World preserves the same event and derived standings.
8. History shows the event, its summary, affected organisers, deltas, tags, Spotlight context, and notes where supplied.
9. A quick +1/-1 path requires a reason and creates an ordinary inspectable event.
10. Editing or voiding an event deterministically recomputes standings.
11. Non-GM users cannot invoke mutation controls.
12. An unknown/malformed persisted schema fails visibly without silently resetting data.
13. No direct World database access occurs.
14. No Spotlight amplification, gem logic, sponsor economy, Closing Ring automation, or rival movement simulator is included in this milestone.

## Validation expectation

Automated tests should cover pure score/tier/trend replay, event validation, caps, edit/void behavior, and persistence-adapter boundaries without requiring a live Foundry client for every rule test.

Manual Foundry validation must exercise the actual ApplicationV2 rendering, Scene Control launch, world-setting persistence, reload retention, and GM/non-GM behavior in V13 Build 351.