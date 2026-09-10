# The Ashen Gauntlet — Project Status

Last coordinated update: 2026-09-09

## Campaign identity

**The Ashen Gauntlet** is a multi-month D&D One campaign built for Foundry VTT. The intended campaign progression is approximately levels 5–8.

The campaign is an arena competition built around a volcanic mountain. Contestants are dispersed across a broad Jungle Ring and navigate a three-dimensional spiderweb of surface territories, buried civilizations, living societies, natural tunnels, magical routes and shattered infrastructure before converging on the Crucible at the summit. Physical altitude does not equal campaign progress.

The arena contains many competing teams. The campaign should support combat, negotiation, alliances, betrayals, exploration, puzzles, hidden rooms, previous contestants, champions, desperate survivors and non-violent solutions.

## Victory structure

The Games contain 25 contestant teams and 25 gems: five colors with exactly five gems of each color. Every team begins with one gem.

A team qualifies as a Victor by collecting one gem of each color, placing the set into its gem container, reaching the Crucible and successfully inserting the container. Duplicate colors may be hoarded, traded, ransomed, gifted, used as insurance, or withheld to deny rivals.

Each successful five-color set leaves circulation permanently, so the gem economy itself limits the Games to at most five Victors. Prime Victor is a separate Crucible endgame distinction whose exact final procedure remains to be designed.

Gems are effectively indestructible for campaign purposes and return to circulation if otherwise made genuinely unrecoverable.
## Core campaign mechanics

### Favor

Elite organisers independently gain or lose Favor toward a team based on observed actions. Different organisers value different behaviour, including combat spectacle, mercy, clever alternatives, discovery and other priorities.

### Spotlight

Organisers observe contestants continuously through the bracelet-linked Games magic, so Favor remains active at all times. Under Spotlight, a visible magical orb manifests near the team so the audience can tune in directly; Favor consequences are amplified and public pressure increases.

### Sponsors

Every team is assigned a Sponsor for the pre-Games phase. Sponsors are normally former Victors who prepare contestants, guide them through Games institutions, and personally deliver them to the insertion handoff. Their active role ends at insertion: no messages, item delivery, tactical advice, or intervention occurs afterward. A formal reunion occurs only if the team later qualifies as a Victor.

### Rival teams

Important rival teams should be persistent characters with goals, relationships, changing resources and evolving arcs. Background teams should normally be abstracted rather than fully simulated.

## Technical baseline

- Project root: `D:\VTT\FoundryVTT-Campaigns\Ashen Gauntlet`
- Foundry application/data root: `D:\VTT\FoundryVTT`
- Foundry module runtime path: `D:\VTT\FoundryVTT\Data\modules\ashen-gauntlet`
- Canonical module source: `foundry-module/ashen-gauntlet`
- Foundry target: Version 13 Build 351
- Module id: `ashen-gauntlet`
- Git is active; `master` is the current shared baseline branch.
## Proven development pipeline

- Foundry discovers and enables The Ashen Gauntlet module.
- Module JavaScript executes successfully in Foundry V13 Build 351.
- Development smoke-test notification and settings work.
- Canonical scene packages live under `scenes/`.
- A V1 scene blueprint format exists and has been used by `dev01-scene-pipeline`.
- Source-to-Foundry development import is proven through a World compendium created with public V13 APIs.
- Runtime World databases under `Data/worlds` are never directly edited.

## Dungeondraft integration

- Dungeondraft version: 1.2.0.1
- Installation: `D:\VTT\FoundryStuff\Dungeondraft\Dungeondraft.exe`
- Python: 3.11.9
- Codex CLI: 0.153.4
- Dungeondraft MCP dependency is pinned as a Git submodule at commit `c5984a36f1be3f77b8f3be41d44a515f763797fd`.
- Codex can invoke registered Dungeondraft MCP tools directly without PowerShell/Python wrappers.
- Direct reads and writes have been proven: status, room construction, walls, objects, portals and blueprint geometry.
- Routine screenshot verification is disabled; the user visually reviews Dungeondraft and provides screenshots when correction is needed.

## Dungeondraft asset catalog

- 1,947 assets have been indexed through read-only Dungeondraft registry calls.
- 13 initial core semantic mappings exist, plus 35 approved production-planning mappings in `classifications/volcanic-v1.json`.
- Five development-profile defaults exist, alongside the approved `ashen-volcano-v1` production-planning profile.
- Asset resolution order is: scene override -> active profile -> semantic classification -> raw catalog search -> report unavailable.
- Dungeondraft asset URIs must not be guessed or hard-coded into scene blueprints.
- Commercial asset binaries are not committed merely for catalog resolution.
## Coordination model

The local repository is the canonical source of truth. ChatGPT project conversations are used for design, coordination and specialist workstreams. Codex is primarily reserved for implementation and repository/tooling work.

When the Remote Desktop Commander device is online, ChatGPT project conversations can read and update the local Ashen Gauntlet repository directly. Important cross-workstream decisions should be reflected in this status file and in `docs/decision-log.md`.

## Planned workstreams

- **Project Director:** overall priorities, cross-workstream consistency and status coordination.
- **Campaign Architect:** levels 5–8 progression, volcano structure, milestone pacing, arena escalation, team placement, gem economy and broader arena simulation.
- **Map Designer:** map topology, tactical spaces, environmental art direction, Dungeondraft blueprints, asset profiles and map review.
- **NPC Designer:** rival teams, organisers, sponsors, champions, previous contestants and recurring character arcs.
- **Systems / Script Designer:** Favor, Spotlight, Gems, Sponsors, contestant state, Foundry UI, hooks, persistence and automation.
- **Scene / Journal Designer:** encounter structure, puzzles, secrets, read-aloud, journals, alternatives, consequences and scene-specific GM material.
- **Session Director:** later-stage session preparation, likely branches, current arena state and post-session updates.

## Current priorities

1. Game Start Run 001 placement is locked independently of player build: seed ASHEN-GAUNTLET-RUN-001-2026-09-09 places the player team at JR-C-I2 in Blackwater Steps; the complete 25-team field is in campaign/runs/run-001-start-state.json. Starting gem colors remain the next separate Game Start step.
2. Map Designer: keep the approved JR-A/B/C/F candidate hub blueprints ready for promotion once the player territory is selected; no further graph optimization is planned absent playtest evidence.
3. Immediately before the first production Dungeondraft render, live-confirm the 35 `volcanic-v1.json` mappings through read-only registered MCP queries and visually inspect provisional floor treatments, especially `dwarven.floor.slab` and `ruin.floor.roman-worn`.
4. Once the player territory is selected, promote its candidate hub blueprint into a canonical `scenes/` package and begin the first Dungeondraft production draft.
5. NPC Designer / Project Lead: review `campaign/sponsors/sponsor-institution-v1.md` and the deeply authored Run 001 player Sponsor in `campaign/sponsors/run-001-player-sponsor.md`. Do not create the wider Sponsor roster until these are approved. Systems / Scene workstreams continue Favor and anchor-scene dependencies without changing accepted campaign topology.

## Open design questions

- Systems Designer Favor implementation; additional organiser lore should be added only when another workstream needs specific table-facing detail.
- Sponsor Institution V1 and the Run 001 player Sponsor are drafted for review. The no-post-insertion-contact boundary is fixed; wider Sponsor roster/rules wait for approval.
- Exact Spotlight selection/amplification rules.
- Gem-knowledge model: true ownership versus player-known/rumoured ownership.
- Run 001 contestant/player insertion assignments are resolved in campaign/runs/run-001-start-state.json using the reusable deterministic model in docs/campaign-design/game-start-seeding-v1.md. Starting gem colors remain unresolved. Geographic display names remain provisional until scene design.
- Final Crucible qualification and Prime Victor procedure.
## Campaign design canon

- `docs/campaign-design/volcano-lore.md`: history, cultures, civilizations, organisers, bracelets and setting lore.
- `docs/campaign-design/major-areas.md`: canonical major-area identities.
- `docs/campaign-design/campaign-skeleton.md`: canonical progression, web logic, starting structure, gem economy, Favor, Spotlight, rival movement and pacing.
- `docs/campaign-design/structural-handoff.md`: final Phase 1 architecture constraints: major-area connectivity, convergence model, threat distributions, level milestones, gem-color distribution, duplicate qualification rules, and early Crucible access.

## Closing Ring timer

The campaign now has a canonical anti-stall timer. The bracelet-linked containment field remains fully open through day 30, then contracts on days 31, 38, 45 and 52. Surface territory closes first; later contractions also rise through lower/deeper subterranean routes, forcing surviving teams toward upper connectors, the Caldera Underworld and multiple Crucible thresholds.

Boundary contact is clearly telegraphed by bracelet warnings and escalating magical injury. If a contestant is killed by the Closing Ring, carried gems are transferred to their corresponding color shrines at the wilderness-facing outer Crucible threshold, where active teams can reconquer them.

Map and systems work must preserve multiple viable routes through each contraction stage and at least 2-3 distinct final threshold approaches.

## Map Designer progress

- `docs/map-design/jungle-ring-topology-v1.md` defines the accepted seven partially isolated Jungle Ring territories with a 4/4/4/4/3/3/3 distribution of the 25 insertion anchors.
- `docs/map-design/interior-mixing-topology-v1.md` extends the normal Jungle penetrations into the Buried Kingdom, Verdant Expanse, Broken Dwarven Realm, Great Warrens, and Vent-Cities; `maps/topology/interior-mixing-v1.json` contains 37 nodes, 52 edges, and 31 reserved onward interfaces.
- `docs/map-design/inner-convergence-topology-v1.md` now defines the Veiled Domain, Labyrinth of Ash, Ember Kingdoms, Shattered Heart, Caldera Underworld, three outer Crucible thresholds, five gem-recovery shrines, and the exceptional DR/VC/SH threshold bypasses.
- `maps/topology/inner-convergence-v1.json` contains 83 nodes and 105 edges and consumes all 31 prior reserved interfaces exactly once with no macro-connectivity violations.
- The combined interior-to-threshold network has a minimum entry-to-threshold node cut of 3. After Day 52 the surviving 33-node graph remains connected; every surviving inner route family reaches all three thresholds, and losing one threshold still leaves two qualification approaches.
- Reliable route distances from the seven Jungle territories to their best thresholds vary by only one transition; exceptional discoveries can produce the canonical 7-9-transition lucky route without making that territory normally dominant.
- `maps/topology/jungle-ring-v1.json` now provides a structured source for the previously Markdown-only Jungle layer.
- `maps/topology/full-volcano-v1.json` consolidates the three topology sources into 193 nodes and 281 explicit edges for simulation and downstream tooling.
- `docs/map-design/topology-simulation-v1.md` and `maps/topology/topology-simulation-v1.json` record the first 25-team placement and route-pressure stress test: 100/100 balanced placement searches found zero-violation fields under current NPC suitability constraints.
- Simulation exposed and corrected a Shattered Heart routing bias: the two DR landings now feed Broken Aquifer and Crown Fracture, improving reliable final-gate pressure from roughly 54/42/4 to 45/29/27 without changing macro connectivity or normal route fairness.
- Campaign-scale topology is accepted project baseline. `maps/topology/full-volcano-v1.json` is the canonical structured topology source; geographic display names remain provisional presentation metadata.
- `docs/map-design/volcanic-visual-profile-v1.md` and `maps/asset-catalog/profiles/ashen-volcano-v1.json` are approved production-planning baseline for geology, Jungle, water, ruins, dwarven/elven construction, burrows, lava/ash, lighting, elevation, and transitions.
- `maps/asset-catalog/classifications/volcanic-v1.json` adds 35 reusable semantic mappings approved for production planning from the raw MCP-derived catalog; live read-only MCP confirmation is still required before the first production render. `dwarven.floor.slab` and `ruin.floor.roman-worn` are explicitly visually provisional pending first inspection.
- `docs/map-design/hub-scene-spatial-standard-v1.md` is approved and defines hubs as navigable environmental decisions rather than rooms with labelled doors.
- `docs/map-design/early-scene-candidates-v1.md` is an approved candidate slate for JR-A/B/C/F without selecting the player start.
- Four detailed candidate hub blueprints now exist under `maps/blueprints/candidates/jungle-hubs/`; validation found no missing topology bindings, unresolved semantic IDs, broken area connections, or out-of-bounds geometry.

## NPC Designer progress

- campaign/teams/contestant-field-framework.md has been revised around mechanical contestant design rather than story-first team archetypes.
- Canonical field structure: 10 primary rival entries plus the player team, with 14 background entries. Teams may contain one contestant, elite pairs, ordinary adventuring parties, or larger weaker companies.
- Rival power is intentionally uneven relative to the four-character level 5-8 player party; class levels are design shorthand and final combat implementation should normally use streamlined class-inspired NPC stat blocks.
- Most teams are strangers drawn from across the world; only one or two entries should normally contain prior Gauntlet participants or meaningful pre-Games familiarity.
- Exact starting micronodes and gem colors remain deliberately unassigned; insertion belongs to the Game Start Manager and gem colors remain a separate constrained-random step.
- The Eight organisers and the primary rival roster are now approved canon. Sponsor design is ready to begin; exact insertion placement and starting gem colors remain deferred.
- The 14 background rival archetypes are now mechanically defined in campaign/teams/background-contestant-archetypes.md, completing the 24-rival field around the player team at concept level.
- campaign/teams/contestant-field-matrix.md now consolidates all 25 registered entries, including the player party, with mechanical threat, recovery, scouting, mobility, route suitability, and insertion-placement guidance tied to the current seven-territory Jungle Ring proposal.
- campaign/teams/primary-team-profiles.md is now the canonical A-J primary rival roster: 10 team identities and 29 individual contestants with approved personalities, behavioral tendencies, gem responses, ethics, organiser affinities, voices, and vulnerabilities. Outcomes remain emergent and homeland geography remains intentionally lightweight/provisional.
- Primary-team revision pass completed: accidental Forgotten Realms geography has been removed and replaced with provisional original-world homelands/cultural functions; The Last Standard, The Black Banner, and The Saltroad Four now add stronger prestige, lethality, money/fame, and competitive motives; organiser affinity is more evenly distributed. Exact world geography remains provisional until a campaign-setting decision is explicitly made.
- Exact contestant insertion placement is outside the NPC Designer workstream and should be handled by the Game Start Manager after player-party dependencies are ready. Primary-team review is complete and sponsor design may now begin.
- campaign/organisers/organiser-roster.md contains the approved Eight. Canon now explicitly treats them as upper-stratum, approximately level-20-scale figures whose class/adventuring identities span martial, arcane, divine, primal, social, clandestine and occult traditions independently of their Favor philosophies. Magic is cross-cutting rather than its own Favor domain, and organiser dissent from the Games does not erase institutional complicity. Numeric Favor mechanics remain Systems Designer responsibility.
- Sponsor institution draft now exists at `campaign/sponsors/sponsor-institution-v1.md`, defining Sponsors as pre-Games mentors/escorts rather than ongoing support. `campaign/sponsors/run-001-player-sponsor.md` proposes Tavra Sen as the deeply authored player Sponsor. Both await review before any broader Sponsor roster is created.

## Systems Designer progress — Favor V1

- Favor V1 design is complete and ready for Codex implementation.
- Canonical rules are in `campaign/rules/favor-v1.md`.
- Foundry runtime/UI architecture is in `docs/foundry-architecture/favor-v1-runtime-and-ui.md`.
- Codex handoff is in `docs/foundry-architecture/favor-v1-codex-handoff.md`.
- Approved score model: organiser/team-specific integer -10..+10, five descriptive tiers, event magnitudes 1/2/3, and derived recent trend.
- The event ledger is authoritative; quick adjustments remain event-backed and reasoned.
- First-slice persistence is a versioned hidden Foundry World setting using supported V13 APIs.
- The first implementation milestone is player-party only: open pane, show all Eight, add a multi-organiser event, persist/reload, and inspect history.
- Spotlight amplification, organiser boons/hindrances, off-screen rival automation, contestant movement, Gems, Sponsors, and Closing Ring automation remain out of scope until the vertical slice is validated.
- After Codex completes the milestone, Systems Designer review should validate rule fidelity, tests, V13 API use, persistence behavior, and live Foundry evidence before Project Lead acceptance.