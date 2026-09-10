# The Ashen Gauntlet — Decision Log

This file records established cross-project decisions. It is intended to preserve why the project is structured the way it is and prevent separate workstreams from silently diverging.

## 2026-09-08

- The campaign and repository are named **The Ashen Gauntlet**. Technical IDs use `ashen-gauntlet`.
- Canonical project root: `D:\VTT\FoundryVTT-Campaigns\Ashen Gauntlet`.
- Foundry module source lives at `foundry-module/ashen-gauntlet` and is exposed to `D:\VTT\FoundryVTT\Data\modules\ashen-gauntlet` through a Windows junction.
- The full development repository is kept separate from Foundry's runtime/application files.
- The repository is the canonical authored source; Foundry World databases are runtime state and must not be edited directly.

## 2026-09-09 — Foundry

- The project targets **Foundry VTT Version 13 Build 351**, not V14.
- Prefer documented public V13 APIs and avoid private/internal APIs where practical.
- The module smoke test is considered proven: Foundry discovers the module, executes its JS, registers a setting and displays the GM startup notification.
- Major authored scenes use self-contained scene packages under `scenes/`.
- Authored scene source, packaged module content and mutable World runtime state are separate layers.
- Generated Foundry artifacts must remain reproducible from canonical authored source.
## 2026-09-09 — Dungeondraft

- Dungeondraft is the primary editable map-authoring environment for automated first drafts and human finishing passes.
- Codex uses the registered project-scoped Dungeondraft MCP tools directly for ordinary map work.
- PowerShell/Python wrapper clients are fallback-only when direct MCP invocation is unavailable or demonstrably insufficient.
- Ordinary Dungeondraft map writes are pre-authorized for this project; per-operation confirmations are not desired.
- Routine screenshot verification is not part of the generation loop. Structured MCP results are the normal automated verification; the user performs visual review.
- The scene blueprint describes gameplay/spatial intent while Dungeondraft remains canonical for visual map editing.
- Asset resolution must use the project semantic asset catalog when mappings exist.
- Asset URI resolution order is scene override -> active profile -> general semantic mapping -> raw catalog discovery -> unavailable report.
- Dungeondraft asset URIs must not be guessed or embedded directly in scene blueprints.
- Commercial asset metadata may be indexed, but commercial asset binaries are not copied into the repository without explicit approval.

## 2026-09-09 — Campaign structure

- The intended campaign progression is approximately **levels 5–8**.
- Campaign-level progression should determine where rival teams, encounter difficulty, sponsor escalation and arena threats fit.
- The Games contain 25 contestant teams and 25 gems: five colors with five copies of each color. Every team begins with one gem.
- Qualification requires one gem of each color placed into the team's container and successfully inserted into the Crucible.
- Duplicate colors are legal strategic assets for trade, insurance, alliances, ransom, denial, or bargaining.
- Inserted five-color sets leave circulation permanently, so at most five teams can become Victors. Prime Victor is decided separately in the Crucible endgame.
- Gems remain in circulation if otherwise irrecoverably lost; they are effectively indestructible for campaign-structure purposes.
## 2026-09-09 — Campaign mechanics

- Favor is organiser-specific rather than a single global reputation score.
- Organisers may value conflicting behaviours such as combat spectacle, mercy, clever non-violent alternatives and discovery.
- Organisers observe contestants continuously through bracelet-linked Games magic. Spotlight is the audience-facing state in which a visible magical orb manifests near the team and amplifies Favor consequences.
- Sponsors are pre-Games mentor/escort figures, normally former Victors. Their active role ends at insertion: they do not communicate with, resupply, advise, rescue, or otherwise intervene for contestants once the team enters the arena. The traditional formal reunion occurs only if the team later qualifies as a Victor.
- Important rival teams should be persistent authored characters; the wider contestant field should normally be abstracted rather than exhaustively simulated.

## 2026-09-09 — Coordination

- Git is used for version history because the project will involve potentially breaking generated and scripted changes.
- ChatGPT project conversations handle campaign design, coordination and specialist workstreams; Codex is primarily reserved for implementation.
- The local repository is the shared authority across chats and Codex.
- `docs/project-status.md` records current truth; `docs/decision-log.md` records established cross-project decisions and rationale/context.
- Remote Desktop Commander is available to ChatGPT project conversations when the user's desktop device is online, allowing direct read/write access to the local project.
- Substantial workstreams should consult the canonical local coordination documents before making project-level assumptions.
- Major new cross-project decisions should update the coordination documents rather than existing only in conversation history.
## 2026-09-09 — Campaign design sources

- `docs/decision-log.md` records durable cross-project decisions and should not duplicate full campaign lore or region detail.
- `docs/campaign-design/volcano-lore.md` is the canonical lore foundation for the volcano's history, cultures, civilizations, ecology, organiser relationship, bracelets, Spotlight, and Favor context.
- `docs/campaign-design/major-areas.md` is the canonical macro-region framework for the volcano interior.
- Workstreams designing encounters, maps, NPCs, rival routes, journals, or systems that depend on volcano history or cultures should consult `docs/campaign-design/` before making new assumptions.
- The Jungle Ring is a full major campaign area alongside the interior regions and owns the starting network, surface scenes, living cultures, and early traversal.
- `docs/campaign-design/campaign-skeleton.md` is the canonical source for campaign progression, spiderweb logic, starting structure, gem economy, Favor, Spotlight, rival movement, and pacing.
- The major areas are: The Jungle Ring, The Buried Kingdom, The Verdant Expanse, The Broken Dwarven Realm, The Veiled Domain, The Labyrinth of Ash, The Great Warrens, The Ember Kingdoms, The Vent-Cities, The Shattered Heart, and The Caldera Underworld, followed by the organiser-controlled Crucible.
- Major areas are not linear elevation tiers. They may interconnect, overlap, remain semi-isolated, or be reached from different heights through natural, elven, dwarven, creature-made, or cultural routes.
## 2026-09-09 — Major-area update

- The Jungle Ring is a full major campaign area rather than merely a surface shell or prologue. It owns authored scenes, traversal micronodes, living ridge cultures, early rival movement, and the contestant insertion network.
- At least 25 established contestant starting positions should be distributed across several partially disconnected jungle/ridge territories.
- Surface territories may feed into the same interior regions without connecting directly to one another; starting altitude and physical proximity do not determine actual progression or encounter likelihood.
- Canonical detail remains in `docs/campaign-design/major-areas.md`.

## 2026-09-09 — Campaign architecture handoff

- `docs/campaign-design/structural-handoff.md` completes the first Campaign Architect phase and is the canonical constraint document for the concrete micronode graph.
- Major-area connectivity uses primary, limited/conditional, and absent direct-link classes; exact micronodes remain Map Designer responsibility.
- Threat bands overlap across regions; accessible areas may contain threats above party level and Extreme content intended for avoidance, negotiation, stealth, puzzles, or escape.
- Level 6 marks breakout from the insertion sphere, level 7 marks strategic network mastery, and level 8 marks entry into the credible qualification race; these are campaign-state milestones rather than fixed location gates.
- Starting gem colors use constrained randomization: five of each color, geographically dispersed, without reliable color-to-region mapping.
- Qualification consumes exactly one gem of each color. Duplicate gems still carried by a qualifying team are reseeded into reachable inner-network nodes rather than leaving circulation.
- Early Crucible discovery is legal. Unqualified teams may scout the outer threshold and learn the mechanism, but cannot gain sanctuary, deposit partial sets, enter protected Victor areas, or complete qualification without all five colors.
## 2026-09-09 — Closing Ring

- The Gauntlet uses a bracelet-linked shrinking containment field as a hard anti-stall timer.
- Days 1-30 remain fully open. Contractions occur on days 31, 38, 45, and 52, first reducing peripheral surface space and later closing lower/deeper routes from beneath as well.
- Contestants receive clear bracelet warnings at the boundary; lingering beyond it causes escalating magical injury and eventual death rather than an unseen instant kill.
- Gems carried by contestants killed by the Closing Ring are transferred to their corresponding color shrines at the wilderness-facing outer Crucible threshold, keeping all gem colors in active circulation.
- The five color shrines remain outside protected Victor custody and are contestable by active teams.
- Closing geography must preserve multiple viable route families and at least 2-3 final Crucible threshold approaches rather than reducing the endgame to one mandatory corridor.
- This mechanic constrains contestants through Games magic but does not imply organiser control over the volcano's terrain, inhabitants, ruins, or hazards.
## 2026-09-09 — Contestant authoring handoff

- The 10-primary / 14-background rival mechanical framework is approved as the basis for NPC character creation. Primary status is authoring fidelity, not plot armor or a power tier.
- Exact insertion territory/anchor placement is not an NPC Designer responsibility; it belongs to the Game Start Manager after topology acceptance and player-party capability inputs are available.
- Starting gem assignment remains a separate constrained-random step and must not be chosen to force NPC storylines.
- Sponsor identities should be designed after the ten primary teams are characterized so sponsor relationships can be specific to the contestants rather than generic benefactor templates.
- Primary rival profiles must define conditional behavior and vulnerabilities without prescribing future alliances, betrayals, deaths, victories, or encounters.


## 2026-09-09 — Map topology accepted baseline

- Campaign-scale topology is approved and should no longer be optimized absent playtest evidence or a later architectural contradiction.
- The Jungle Ring uses seven surface territories with a 4/4/4/4/3/3/3 distribution of the 25 insertion anchors.
- Four limited surface crossings exist and there is no complete walkable Jungle loop.
- The current micronode topology, interior mixing model, inner convergence model, Shattered Heart routing correction, and Closing Ring node-removal schedule are accepted project baseline.
- The endgame preserves three ordinary wilderness-facing Crucible approaches plus exceptional limited threshold routes from the Broken Dwarven Realm, Vent-Cities, and Shattered Heart.
- The final topology must preserve three-way threshold resilience; current validation and simulation are sufficient for baseline acceptance.
- `maps/topology/full-volcano-v1.json` is the canonical structured campaign-topology source. Layer JSON files remain its authored components.
- Geographic display names such as Raincoil Basin and Cloudfang Escarpment remain provisional presentation metadata. Renaming a place without changing node identity, connectivity, route class, or closure behavior does not require architectural review.
- Exact contestant placements, exact player insertion, starting gem assignments, encounter content, and battlemap geometry remain unresolved and are outside this topology approval.

## 2026-09-09 — Setting and NPC revision boundary

- The Ashen Gauntlet has not been assigned to a published campaign setting. Forgotten Realms geography must not be assumed or introduced incidentally.
- Until a setting decision is made, NPC homelands may use provisional original-world names, but their cultural/mechanical function is more durable than the proper noun.
- The Eight organisers' core personalities and Favor philosophies are approved.
- Primary rival mechanical identities A-J and their core character dynamics are approved in principle, subject to revision for collective moral/motivational variety rather than wholesale replacement.
- Primary rival behavior remains conditional and emergent; no alliance, betrayal, death, qualification, or encounter is predetermined.
- Sponsor character creation remains downstream of the revised primary contestant profiles.

## 2026-09-09 — Map production planning baseline

- `docs/map-design/volcanic-visual-profile-v1.md` and `maps/asset-catalog/profiles/ashen-volcano-v1.json` are approved as the shared production-planning visual baseline.
- `docs/map-design/hub-scene-spatial-standard-v1.md` is approved. Hub scenes must communicate route choice through physical geography and environmental cues rather than destination labels.
- `docs/map-design/early-scene-candidates-v1.md` is approved as the candidate slate for JR-A/JR-B/JR-C/JR-F; this does not select the player start.
- The 35 mappings in `maps/asset-catalog/classifications/volcanic-v1.json` are approved for production planning against the authoritative raw catalog snapshot. Live read-only MCP availability confirmation is still required immediately before the first Dungeondraft production render.
- Catalog availability and visual suitability are separate validation concerns. `dwarven.floor.slab` and `ruin.floor.roman-worn` are technically valid mappings but remain visually provisional until first Dungeondraft inspection.
- No further campaign-scale topology optimization is planned unless playtesting or a later architectural contradiction exposes a problem.
- The next real production scene waits on player-party capability review and player territory selection; contestant placements and gem assignments remain unresolved separately.
## 2026-09-09 — Primary rival and organiser canon

- The 10 primary rival mechanical identities A-J are canon.
- The 10 primary team names and 29 individual contestant identities/personalities are canon.
- Behavioral tendencies, gem responses, ethics, organiser affinities, and vulnerabilities are canon as tendencies only; no alliance, betrayal, death, victory, qualification, or encounter outcome is predetermined.
- Original-world homeland concepts are accepted as intentionally lightweight/provisional geography. The Ashen Gauntlet is not assumed to use Forgotten Realms geography unless a future explicit setting decision says otherwise.
- The Eight organisers are canon. Their core personalities, Favor philosophies, weaknesses, and internal disagreements are approved; numerical Favor mechanics remain a Systems Designer concern.
- Sponsor design may now begin and should be built around specific contestant relationships rather than generic benefactor templates.
- Exact insertion positions and starting gem colors remain deferred to their existing Game Start / constrained-random assignment workflows.

## 2026-09-09 — Organiser interpretation sharpened

- The Eight belong to the absolute upper social and adventuring stratum: rulers, high religious authorities, supreme generals, archmages, legendary adventurers, intelligence powerbrokers, cultural icons, merchant-princes and comparable figures with approximately level-20-scale personal capability.
- Favor philosophy and class/adventuring identity are separate dimensions. The Eight collectively evoke martial, arcane, divine, primal, social, clandestine and occult high-level traditions without requiring literal PC sheets or a one-organiser/one-class mapping.
- Magic is cross-cutting and never constitutes a generic "magic Favor" category. The same spell or magical method may please or irritate different organisers according to purpose, execution, cost, spectacle, mercy, leverage, discovery, strategy or survival value.
- Most organisers do not fundamentally regard ordinary contestants as social equals. They may admire individual contestants intensely while remaining culturally and emotionally accustomed to the Games killing many entrants.
- Organiser relationships to the Games vary from enthusiastic devotion to strategic, political, scholarly or cultural support to deep criticism of particular traditions. Dissent does not remove complicity: remaining one of the Eight helps sustain and legitimize the institution.
- No ninth organiser is added merely to represent magic; the existing Eight adequately span mystical, magical, religious, primal and occult identities when their power traditions are expressed correctly.

## 2026-09-09 — Game Start Run 001

- Campaign-run setup is now deterministic and independent of player class, species, race, subclass, movement toolkit, preferred playstyle, desired rival, or desired gem color.
- `docs/campaign-design/game-start-seeding-v1.md` defines the reusable SHA-256 placement procedure; run-specific state belongs under `campaign/runs/` and does not modify reusable topology.
- Run seed `ASHEN-GAUNTLET-RUN-001-2026-09-09` selects player anchor `JR-C-I2` in Blackwater Steps and deterministic rival-search nonce `26744`.
- The complete 25-team initial insertion field is recorded in `campaign/runs/run-001-start-state.json`.
- Player local territory sphere is T/N/H: the solo sanctified champion, recovery-heavy expedition, and Copper Company. This is geographic possibility only and does not script contact.
- Starting gems remain explicitly unassigned and will be resolved in a separate constrained-random step.
- `JR-C-H` Blackwater Divide is therefore the approved early hub candidate promoted toward first production for Run 001.
## 2026-09-09 — Favor V1 systems design

- Favor uses stable organiser/team IDs and is tracked independently for every organiser/team pair; Foundry-generated Actor or document IDs are never the primary identity.
- Favor scores use an integer -10 to +10 scale with five descriptive tiers: Rejected, Disfavored, Uncommitted, Favored, and Esteemed.
- Normal Favor changes are event-driven at magnitude 1, 2, or 3. One event may affect several organisers differently; natural affinity never grants automatic Favor.
- The Favor event ledger is authoritative runtime history. Standings, tiers, and recent trends are derived from non-voided ledger events rather than stored as independent truth.
- Quick GM adjustments must still create reasoned events. Edit and void operations preserve auditability and trigger deterministic replay.
- Favor V1 stores Spotlight-compatible context but performs no Spotlight amplification; base and applied deltas remain separate for later extension.
- First-slice persistence uses a versioned hidden World setting through supported Foundry APIs. Authored organiser philosophy remains repository canon; mutable Favor state remains World runtime data.
- Off-screen rival Favor must eventually be produced by explainable plausible events using authored team tendencies and contextual heuristics plus bounded randomness. Random score drift is prohibited.
- Automatic rival events are capped at magnitude 2 unless the GM confirms a Defining event. Off-screen simulation is not part of the first Favor implementation milestone.
- Future contestant movement/state remains a separate versioned runtime domain keyed by the same stable team IDs; Favor may consume that state later but does not own it.
## 2026-09-09 — Sponsor lifecycle boundary

- Every registered team is assigned a Sponsor for the institutional pre-Games phase.
- Sponsor value is preparation, lived experience, guidance through Games traditions and bureaucracy, and personal delivery to the insertion handoff—not remote support during play.
- Once insertion occurs, Sponsor communication and assistance cease completely. Observation, if any, is one-way.
- A Sponsor may re-enter the player-facing story through the formal Victor reception only if their assigned team qualifies.
- The detailed Sponsor institution and Run 001 player Sponsor are still under review; broader Sponsor rosters and lightweight background rules must wait until that review is accepted.

