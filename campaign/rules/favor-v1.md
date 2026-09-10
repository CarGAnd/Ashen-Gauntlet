# Favor V1 — Canonical System Specification

Status: Approved systems-design specification for Codex implementation handoff. Production implementation remains outside the Systems Designer boundary until Codex completes the vertical slice and this workstream validates it.

## Purpose

Favor measures each organiser's personal judgment of each registered contestant team. It is not morality, alignment, audience popularity, sponsor standing, or a global reputation score.

The same action may please one organiser, mildly impress another, leave several unmoved, and offend another. Magic has no generic Favor category; magical actions are judged by purpose, execution, cost, leverage, mercy, strategy, discovery, spectacle, and survival value.

Organiser philosophy is authored canon. Current standings and event history are mutable Foundry World runtime state.

Favor is always active because organiser observation is continuous through bracelet-linked Games magic. Spotlight later amplifies consequences and public significance; it does not enable Favor.

## Stable identifiers

Organiser IDs are immutable technical identifiers:

| ID | Organiser |
| --- | --- |
| `arcos` | Arcos — The Crown of War |
| `metonius` | Metonius — The Old General |
| `veyra-halden` | Veyra Halden — The Open Hand |
| `nymor-pell` | Nymor Pell — The Seeker Beyond the Door |
| `sable-vey` | Sable Vey — The Knife Behind the Smile |
| `valerius-morn` | Valerius Morn — The Voice of the Crowd |
| `nadira-kes` | Nadira Kes — The Golden Measure |
| `kessa-reed` | Kessa Reed — The Last Trail |
Team IDs are stable competition-entry identifiers, independent of Foundry Actor IDs and display-name changes:

- `pc` — player team.
- `a` through `j` — canonical primary rival slots A-J.
- `k` through `x` — background rival slots K-X.

Current display names for A-J come from `campaign/teams/primary-team-profiles.md`. K-X remain valid runtime identities even before final names are authored.

Foundry document IDs must never replace these IDs as the system's primary identity.

## Score model

Each organiser/team pair has an integer Favor score from **-10 to +10**. New relationships begin at 0 unless an explicit event establishes prior reputation.

The GM pane displays both score and descriptive tier:

| Score | Tier | Meaning |
| ---: | --- | --- |
| -10 to -8 | Rejected | The organiser actively disapproves of how this team operates. |
| -7 to -4 | Disfavored | A meaningful negative relationship has formed. |
| -3 to +3 | Uncommitted | The organiser has impressions, but no strong settled preference. |
| +4 to +7 | Favored | The organiser materially approves of the team's demonstrated approach. |
| +8 to +10 | Esteemed | The team has repeatedly or decisively embodied what this organiser values. |

The numeric score provides gradual resolution. The tier prevents the UI from pretending that a one-point difference is a precise social measurement.

Zero is not a special reset state. A team at +2 and a team at -2 are both Uncommitted but should visibly show their different direction and history.
## Favor changes and magnitude

Favor changes are event-driven. Direct score mutation is not a normal game action.

Per-organiser event deltas use only these base magnitudes:

| Delta | Magnitude | Interpretation |
| ---: | --- | --- |
| ±1 | Minor | A real but modest expression of an organiser's values. |
| ±2 | Significant | A clear, consequential choice that strongly fits or violates those values. |
| ±3 | Defining | A rare, high-stakes or unmistakable statement about who the team is. |

A single event may assign different deltas to different organisers. Zero means no evaluation is recorded for that organiser.

Defining changes should be uncommon. Repeated ordinary competence should normally accumulate through ±1 events rather than being compressed into ±3.

Scores are clamped after each event in ledger order. Favor beyond +10 or below -10 is not banked invisibly. If a later event moves the relationship away from a cap, the score changes normally from that cap.

The event sequence, not an editable in-world timestamp, defines mechanical order. Descriptive timestamps may be backdated without rewriting event order.

## Trend

Trend is derived rather than stored. For each organiser, the GM pane examines the five most recent non-voided events that affected that organiser/team pair.

- Net +2 or greater: rising.
- Net -2 or lower: falling.
- Otherwise: mixed/stable.

The UI should also show the signed recent net where space permits, so a tier can remain unchanged while movement is still obvious.
## Favor event model

The Favor ledger is authoritative. Current standings are derived by replaying non-voided events in ascending sequence order.

Each Favor event contains:

| Field | Requirement |
| --- | --- |
| `eventId` | Required stable unique ID. |
| `sequence` | Required monotonically increasing integer within the Favor ledger. |
| `teamId` | Required stable team ID. |
| `summary` | Required short explanation of what happened. |
| `details` | Optional longer factual description. |
| `tags` | Zero or more normalized tags plus optional custom tags. |
| `source` | `gm`, `quick-adjustment`, `simulation`, `migration`, or `correction`. |
| `createdAt` | Required real-world ISO timestamp. |
| `createdByUserId` | Foundry User ID that committed the event when available. |
| `campaignTime` | Optional campaign day/world-time metadata; descriptive, not ledger ordering. |
| `sceneId` | Optional Foundry Scene ID for convenience only. |
| `spotlight` | Required Spotlight-compatible metadata object. |
| `evaluations` | Required array containing at least one non-zero organiser evaluation. |
| `gmNotes` | Optional private GM notes. |
| `simulationContext` | Optional explainability data for simulated rival events. |
| `voided` | Required boolean, default false. |
| `voidReason` | Required when `voided` is true. |

Recommended starter tags are `combat`, `strategy`, `mercy`, `rescue`, `discovery`, `exploration`, `deception`, `spectacle`, `negotiation`, `oath`, `survival`, `resource-use`, `cruelty`, and `retreat`.

Tags aid filtering and simulation; they do not themselves award Favor.
### Organiser evaluation entry

Each `evaluations[]` entry contains:

- `organiserId` — one of the Eight stable organiser IDs.
- `baseDelta` — integer from -3 to +3, excluding 0 in stored entries.
- `appliedDelta` — integer actually applied before score-cap handling.
- `rationale` — optional for GM-authored events, required for simulated events.
- `evaluationSource` — `gm`, `heuristic`, `migration`, or `correction`.
- `overridden` — boolean indicating that the GM changed a suggested/generated result.
- `overrideReason` — optional explanation of that intervention.

V1 GM-authored events normally have `baseDelta == appliedDelta`. The split exists so Spotlight or later automation can transform a justified base judgment without destroying the original evaluation.

An event must not contain duplicate organiser IDs. Neutral organisers are omitted rather than stored with zero deltas.

### Spotlight compatibility

Every event carries a `spotlight` object even though Spotlight V1 is not implemented:

- `active` — boolean.
- `amplifier` — numeric metadata, default `1` in Favor V1.
- `publicVisibility` — `continuous-observation`, `spotlight-broadcast`, or `other`.
- `audienceSignificance` — optional `low`, `normal`, `high`, or `exceptional`.

Favor V1 does not calculate a Spotlight multiplier. Marking `active: true` records context only. Automatic amplification waits for the Spotlight specification.

Later Spotlight code may calculate `appliedDelta` from `baseDelta`, but must preserve both values and the event rationale.

## Multi-organiser evaluation rules

The GM evaluates what the team chose and why, not the class feature or spell school used. The organiser roster is the authoritative philosophy source.
When an event could affect several organisers:

1. Describe the event once in factual terms.
2. Evaluate only organisers with a meaningful philosophical reaction.
3. Assign magnitude independently for each organiser.
4. Do not force symmetry; +2 with one organiser does not require -2 somewhere else.
5. Do not award Favor merely because a team matches an organiser's natural affinity.
6. Do not use generic alignment, good/evil, lawful/chaotic, magical/non-magical, or victory/defeat scoring.
7. Judge failure by choices and execution. A failed rescue may still impress Veyra; a won battle may still disappoint Metonius if it was wasteful.
8. Repeated identical low-stakes behavior may become less noteworthy unless context changes.

Natural organiser fit describes which behavior a team is likely to produce. It is not an automatic modifier to earned Favor.

## Manual authority and correction behavior

The GM has final authority over all Favor outcomes.

Normal adjustment paths are:

- Full event entry: one event, one team, one or more organiser evaluations.
- Quick +1/-1 control: opens a compact event entry prefilled for that organiser and delta; a short reason must still be supplied before commit.
- Edit event: changes the factual/event metadata or evaluations, then recomputes all standings from the ledger.
- Void event: preserves audit history but removes the event from score calculation; a void reason is required.

The UI must not provide an unlogged button that directly mutates a stored total.

An administrative "set standing" repair, if ever exposed, must create a `correction` event containing the required delta and reason rather than rewriting history silently.

V1 should prefer edit/void over destructive deletion. Hard deletion is not required.
## Player-team fidelity

The player team receives full manual/event fidelity throughout Favor V1:

- All Eight standings visible together.
- Every score change represented by an inspectable event.
- Full tag, Spotlight-context, notes, and organiser-evaluation metadata.
- Immediate event creation during live play.
- Editable/voidable history.
- Derived tier and recent trend per organiser.

All eight player-team standings initialize at 0 unless the GM deliberately records pre-Games reputation as an event.

## Rival-team fidelity

The same score and event semantics apply to every team ID A-X. A rival does not use a different Favor scale merely because it is simulated.

Primary rivals should eventually receive event-level history similar to the player party, but most events may be generated off-screen rather than entered manually.

Background rivals may use lower-frequency summarized events. The system may record one event representing a meaningful stretch of off-screen activity rather than logging every room, fight, or travel decision.

Promotion from background to primary fidelity must not reset Favor. Existing events and standings continue under the same stable team ID.

Favor V1's first implementation milestone does not need to automate off-screen rival events. It must leave the schema and UI capable of showing rival standings later without migration of identity or scoring semantics.

## Off-screen Favor heuristic — design contract

Off-screen Favor must be generated from plausible events, never from direct random score drift.

A simulation cycle first decides whether a Favor-worthy event occurred. If none occurred, no Favor changes are generated.

When an event occurs, generation uses authored team tendencies plus current runtime context to choose a plausible event category, resolve its character, and only then evaluate organiser reactions.
Candidate inputs are:

- Team behavioral category weights from authored profiles.
- Current objective.
- Current/most-recent topology region and route family.
- Team condition, injuries, losses, and depleted capabilities.
- Known relationships or current interaction with another team.
- Elapsed campaign time and Closing Ring pressure when relevant.
- Spotlight state when the later Spotlight system exists.

The category-selection weight is conceptually:

`authored tendency × route/environment fit × objective fit × condition fit × campaign-pressure modifier`, followed by bounded randomness.

No simulation implementation may infer permanent personality solely from combat stats. Primary-team behavioral canon comes from `primary-team-profiles.md`; background profiles require authored simulation weights before their automated Favor is enabled.

### Bounded randomness

Randomness exists to prevent deterministic caricatures, not to reverse team identity.

- Strongly characteristic event categories should be common.
- Plausible but unusual categories should retain a small non-zero chance.
- Explicitly impossible categories have zero weight.
- Randomness may move an organiser's otherwise ambiguous automated evaluation by at most one magnitude step.
- Randomness must never invert a clear philosophical reaction, such as turning gratuitous cruelty into positive Veyra Favor merely because of a roll.
- Automatically generated events are capped at magnitude ±2. A ±3 Defining event requires GM confirmation or an on-screen authored event.

Thus Farstriders naturally produce more survival/exploration events than Copper Company produces deception events, while either can occasionally behave outside its most common pattern if context supports it.
### Explainability requirement

Every simulated event must store enough `simulationContext` to answer why it occurred and why an organiser reacted:

- selected event category;
- relevant authored tendency;
- objective/environment/condition factors that mattered;
- bounded-random result or seed/trace sufficient to explain the variation;
- organiser rationale for every non-zero automated evaluation.

The explanation shown to the GM should read as causal prose, for example: "Farstriders chose a difficult ravine bypass while conserving supplies; Kessa approved the terrain mastery and restraint." It must never reduce to "random roll changed Favor."

## Event-history requirements

History must support:

- newest-first display by default while retaining immutable ledger sequence;
- filters by team, organiser, source, tag, Spotlight state, and voided status;
- visible summary, affected organisers, deltas, source, and campaign-time metadata;
- expansion to details, organiser rationales, notes, and simulation context;
- editing and voiding by the active GM;
- clear indication when an event was overridden, corrected, or voided.

History is operational runtime data. It is not automatically promoted into campaign canon.

## Error and edge-case rules

- Unknown organiser or team IDs fail validation and do not write partial state.
- Duplicate organiser evaluations in one event fail validation.
- An event with no non-zero evaluations cannot be committed as a Favor event.
- Scores outside -10..+10 are never persisted as valid derived standings.
- A malformed persisted state must fail closed: notify the GM and preserve the stored value for recovery rather than silently replacing it with defaults.
- Non-GM users never receive Favor mutation controls.
- Only the active GM may commit runtime mutations in V1; other GM clients are read-only to avoid last-write-wins conflicts.
- Closing/reloading the pane must never create an event.
- Reloading Foundry must reproduce identical standings from the same ledger.
- Missing optional portraits or display metadata must not make state unreadable.
## Future contestant-position state boundary

Favor must reference contestant teams only by stable `teamId`. It must not own movement, gems, injuries, or relationship state.

A later contestant-runtime subsystem should be a separate versioned state domain keyed by the same team IDs, with room for:

- `currentNodeId`;
- `previousNodeId`;
- `intendedDestinationId`;
- `objective` and objective metadata;
- aggregate and member condition/injuries;
- movement history;
- known/discovered route IDs;
- true gem inventory and later knowledge projections;
- inter-team relationships;
- current Spotlight state/reference;
- `lastSimulationTick`.

Favor simulation may read this state later but must not duplicate or become authoritative for it.

Likewise, contestant movement may emit Favor events after resolving a meaningful off-screen occurrence, but movement must not mutate Favor totals directly.

This boundary allows movement, gems, Spotlight, and Favor to evolve at different cadences without one monolithic runtime document becoming a concurrency bottleneck.

## Acceptance criteria for the Favor rules model

The design is satisfied when:

1. Every organiser/team relationship uses the same -10..+10 scale and tier mapping.
2. The player team can gain and lose different amounts with several organisers from one event.
3. Every score change can be traced to a non-voided event and its organiser evaluation.
4. Quick adjustments still produce events with reasons.
5. Editing/voiding history deterministically recomputes standings.
6. Spotlight metadata can be recorded without implementing Spotlight selection/amplification.
7. Rival teams can share the same event schema without requiring player-level simulation fidelity.
8. No random rival score drift exists independently of explainable events.
9. Stable team and organiser IDs are independent of Foundry-generated document IDs.
10. Future contestant runtime state can reference the same team IDs without being nested inside Favor state.