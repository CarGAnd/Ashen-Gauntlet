# Codex Implementation Handoff — Favor V1

Status: Ready for Codex. Implement only the first vertical slice described here, then return evidence to the Systems Designer for validation before expanding scope.

Canonical rules: `campaign/rules/favor-v1.md`.
Technical contract: `docs/foundry-architecture/favor-v1-runtime-and-ui.md`.
Target: Foundry VTT Version 13 Build 351.

## 1. Expected files/modules

Codex should keep Favor modular. Expected changes are approximately:

- modify `foundry-module/ashen-gauntlet/scripts/main.js` to register Favor initialization/launch hooks;
- create `scripts/favor/favor-model.js` for pure score/tier/trend/event replay and validation;
- create `scripts/favor/favor-state-service.js` for semantic add/edit/void/read operations;
- create `scripts/favor/favor-persistence.js` for the hidden world-setting adapter;
- create `scripts/favor/favor-app.js` for the GM ApplicationV2 window;
- create one or more `templates/favor/*.hbs` templates;
- add Favor-specific styles to the existing stylesheet or a dedicated module stylesheet;
- create machine-readable organiser UI metadata derived from canonical organiser source if needed;
- add pure automated tests under `tests/favor/`.

File names may vary modestly if the separation of responsibilities remains clear. Do not collapse the subsystem into `main.js`.
## 2. Public Foundry V13 APIs/concepts

Permitted/preferred concepts:

- `Hooks.once("init", ...)`, `Hooks.once("ready", ...)`;
- `Hooks.on("getSceneControlButtons", ...)`;
- `foundry.applications.api.ApplicationV2`;
- `foundry.applications.api.HandlebarsApplicationMixin`;
- Handlebars `PARTS` and template rendering;
- `game.settings.register/get/set` with world scope;
- `game.user.isGM` and `game.user.isActiveGM`;
- `foundry.utils.deepClone` and `foundry.utils.randomID` where suitable;
- `ui.notifications` for visible failures.

Validate every version-specific signature against V13 documentation before implementation. Do not import V14 examples without checking the V13 API.

## 3. Required behaviors

- Initialize schema-version-1 Favor state safely.
- Render all Eight player-team organiser standings together.
- Derive score, tier, and five-event trend from ledger history.
- Add one event that can affect multiple organisers differently.
- Provide compact +1/-1 shortcuts that still require a reason and create an event.
- Persist every successful mutation to the World and retain it across reload.
- Display inspectable event history.
- Support edit and void operations with deterministic replay.
- Fail visibly and preserve data on invalid schema or persistence errors.
## 4. Explicit non-goals

Do not implement in this milestone:

- Spotlight selection, duration, or automatic amplification;
- organiser boons, hindrances, sponsor rewards, or intervention economies;
- automatic rival Favor simulation;
- authored rival simulation weights;
- contestant movement or route simulation;
- gem inventory/rules;
- Closing Ring automation;
- player-facing Favor UI;
- direct World database access;
- arbitrary direct score mutation without an event.

## 5. Persistence contract

Use hidden world setting `ashen-gauntlet.favorState` with schema root:

`{ schemaVersion: 1, revision: 0, nextSequence: 1, events: [] }`

The event ledger is authoritative. Do not persist independent mutable totals as truth.

Only the active GM commits mutations in V1. Other GM clients may read. Increment revision once per successful logical mutation.

Malformed or unknown-newer state must not be silently reset. Preserve it and surface an error/read-only condition.
## 6. UI requirements

Provide a resizable non-modal GM Favor window launched from a GM-visible Scene Control.

Default Party tab:

- all Eight organiser cards visible together;
- score, tier, trend, and recent net per organiser;
- quick +1/-1 event controls;
- recent player Favor events;
- full event composer with all Eight evaluation rows.

Additional tabs:

- Rivals: primary A-J before background K-X; no invented global Favor score.
- History: filters and expandable event details.

Positive/negative state must not rely on color alone. Missing portraits must fall back gracefully.

## 7. Expected automated tests

At minimum test:

- score replay from ordered events;
- clamp behavior at -10/+10 without hidden overflow;
- all five tier boundaries;
- five-event trend calculation;
- multi-organiser events;
- event validation failures;
- quick-adjustment event semantics;
- edit and void recomputation;
- Spotlight metadata round-trip with no amplification;
- schema-version rejection behavior;
- persistence adapter calls the settings boundary rather than directly accessing storage.
Use a pure JavaScript test layer where practical so most rule tests do not require a live Foundry client. The repository currently has no established test runner under `tests/`; a minimal no-dependency Node test approach is acceptable if it keeps runtime module code compatible with Foundry ES modules.

## 8. Manual Foundry validation

Validate in Foundry VTT Version 13 Build 351:

1. Enable the module and load a World as active GM.
2. Confirm the Favor launch control is visible and opens exactly one usable pane.
3. Confirm all Eight player standings begin at 0 in a fresh state.
4. Add an event such as a surrendered-rival rescue with at least three different organiser deltas.
5. Confirm preview and saved standings agree.
6. Close and reopen the pane; confirm no change or duplicate event.
7. Reload the World; confirm the same event and standings return.
8. Use quick +1/-1 and confirm a reason is required and history is created.
9. Edit an earlier event and verify derived standings recompute.
10. Void an event and verify it remains visible but no longer contributes.
11. Confirm Spotlight-active metadata can be saved while applied delta remains unamplified.
12. Log in or test as a non-GM and verify mutation controls are unavailable.
13. Exercise malformed-state handling in a safe development World without editing database files directly.

Record console errors and validation evidence for Systems Designer review.
## 9. Acceptance criteria

Codex may hand the milestone back for Systems Designer validation only when:

- the pane opens in V13 Build 351;
- all Eight player standings render correctly;
- one event can apply different deltas to multiple organisers;
- the ledger persists through World reload;
- history is inspectable;
- quick adjustments remain event-backed;
- edit/void replay is deterministic;
- automated rule tests pass;
- no V14-only or private substitute was used where a documented V13 public API exists;
- no non-goal subsystem was implemented opportunistically.

## 10. Questions Codex must not decide independently

Stop and return to the Systems Designer rather than inventing rules if implementation requires any of these:

- a Spotlight multiplier, stacking rule, selection algorithm, or duration;
- organiser boon/hindrance thresholds or mechanical rewards;
- non-zero starting Favor based only on a team's natural organiser fit;
- authored behavioral/simulation weights for A-X;
- automatic ±3 rival events;
- new organiser philosophies or a ninth organiser;
- new names/personalities for background teams K-X;
- final organiser portrait art or replacement canon;
- a global/average Favor score;
- a change to the -10..+10 scale, tier boundaries, event magnitudes, or stable IDs;
- coupling Favor storage to future contestant movement/gem state.

Where missing display content is non-mechanical, use neutral fallbacks and document the gap rather than inventing campaign canon.