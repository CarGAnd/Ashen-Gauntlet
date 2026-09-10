# The Ashen Gauntlet: Structural Handoff

## Purpose

This document completes the first Campaign Architect phase and provides the constraints required for the Map Designer, NPC Designer, Systems Designer, and Project Lead to proceed without reinterpreting the campaign skeleton.

It supplements `campaign-skeleton.md`, `major-areas.md`, and `volcano-lore.md`.
It does not define individual micronodes, encounters, maps, or final organiser characters.

## Connectivity Legend

The matrix below describes intended direct macro-area connectivity.

- P = Primary connection family. Multiple ordinary micronode links should be plausible.
- L = Limited or conditional connection. Usually hidden, damaged, dangerous, faction-dependent, one-way, or represented by only one or two micronode links.
- - = No normal direct connection expected. Reaching the other area should ordinarily require an intermediate major area.

The matrix is intentionally not a route map. The Map Designer may choose the exact number and placement of links while preserving these relationships.
## Major-Area Connectivity Matrix

Abbreviations: JR Jungle Ring, BK Buried Kingdom, VE Verdant Expanse, DR Broken Dwarven Realm, VD Veiled Domain, LA Labyrinth of Ash, GW Great Warrens, EK Ember Kingdoms, VC Vent-Cities, SH Shattered Heart, CU Caldera Underworld, CR Crucible.

| Area | JR | BK | VE | DR | VD | LA | GW | EK | VC | SH | CU | CR |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| JR | — | P | P | P | L | L | P | - | P | L | - | - |
| BK | P | — | L | P | L | L | P | - | L | P | - | - |
| VE | P | L | — | P | P | L | P | L | L | P | L | - |
| DR | P | P | P | — | P | L | P | P | P | P | L | L |
| VD | L | L | P | P | — | P | L | L | L | P | L | - |
| LA | L | L | L | L | P | — | - | - | - | L | L | - |
| GW | P | P | P | P | L | - | — | P | L | P | L | - |
| EK | - | - | L | P | L | - | P | — | P | P | P | - |
| VC | P | L | L | P | L | - | L | P | — | P | L | L |
| SH | L | P | P | P | P | L | P | P | P | — | P | L |
| CU | - | - | L | L | L | L | L | P | L | P | — | P |
| CR | - | - | - | L | - | - | - | - | L | L | P | — |

The Broken Dwarven Realm is the broadest engineered connector; the Great Warrens are the broadest natural cross-cutting connector; the Shattered Heart is the main late-game collision region; and the Caldera Underworld is the principal final approach.
Limited direct links from the Dwarven Realm, Vent-Cities, or Shattered Heart to the Crucible represent exceptional routes to the outer Crucible threshold, not unrestricted access to the controlled arena interior.
## Route and Convergence Model

The campaign web should change character as contestants move through it.

### Phase 1: Dispersal

The 25 teams begin across several partially disconnected Jungle Ring territories.
Early routes should create local encounter spheres of roughly 2-4 other plausible teams rather than exposing every contestant immediately.
Each surface territory should normally provide 2-3 meaningful ways into the wider web, but those exits should lead to different major areas and different rival populations.

### Phase 2: Mixing

The Broken Dwarven Realm, Verdant Expanse, Great Warrens, and Vent-Cities begin mixing teams that started far apart.
No single bridge node should be mandatory.
The graph should provide at least three genuinely distinct route families from the starting network toward the inner mountain: an engineered/infrastructure route, a natural/ecological route, and a hidden/social/strange route.

### Phase 3: Network Mastery

In the middle campaign, route knowledge becomes as important as altitude.
Players should know enough of the web to choose between speed, safety, secrecy, resources, Favor opportunities, known rivals, and gem targets.
At this stage the graph should be at its most interconnected and should support lateral movement as readily as upward movement.

### Phase 4: Convergence

The Shattered Heart and upper portions of other networks increasingly feed toward the Caldera Underworld.
Late-game routes should still offer meaningful alternatives, but the number of viable macro-directions decreases and rival collision probability rises sharply.
No single pre-Crucible node should be capable of blocking the entire Games.

### Phase 5: Crucible Pressure

The normal endgame enters the Crucible through multiple Caldera approaches, while a few exceptional discovered routes may reach separate outer-threshold approaches.
There should be at least 2-3 distinct final approach micronodes so one team cannot trivially camp the only entrance.
## Threat-Band Distribution by Major Area

The following percentages are architectural targets, not quotas. They describe the approximate mix of authored micronodes that should feel appropriate to each threat band if the full area were developed.
T5-T8 indicate the level at which conventional engagement is broadly appropriate. Extreme indicates a node containing threats or conditions where avoidance, diplomacy, stealth, puzzle-solving, or escape may be more appropriate than direct combat.

| Major area | T5 | T6 | T7 | T8 | Extreme |
|---|---:|---:|---:|---:|---:|
| Jungle Ring | 55% | 30% | 10% | 0% | 5% |
| Buried Kingdom | 30% | 40% | 20% | 5% | 5% |
| Verdant Expanse | 25% | 35% | 25% | 5% | 10% |
| Broken Dwarven Realm | 20% | 35% | 30% | 10% | 5% |
| Veiled Domain | 5% | 25% | 35% | 25% | 10% |
| Labyrinth of Ash | 0% | 25% | 35% | 25% | 15% |
| Great Warrens | 20% | 30% | 25% | 10% | 15% |
| Ember Kingdoms | 0% | 20% | 35% | 35% | 10% |
| Vent-Cities | 20% | 35% | 30% | 10% | 5% |
| Shattered Heart | 5% | 20% | 35% | 30% | 10% |
| Caldera Underworld | 0% | 5% | 25% | 55% | 15% |
| Crucible | 0% | 0% | 0% | 90% | 10% |

These distributions deliberately overlap. A level 5 party may enter a region containing T7 or Extreme content; the world should signal danger and provide alternatives rather than silently scaling every threat to party level.
Likewise, returning to an earlier region at level 7 should not make every node trivial: rival teams, changed inhabitants, new routes, and deeper subareas can preserve relevance.
## Milestone Guidance

Milestones represent changes in campaign state, not arrival in one compulsory region. Session ranges are planning targets and should bend when player choices create unusually fast or slow campaigns.

### Level 5 to Level 6: Breakout

Planning target: approximately sessions 4-6 at level 5.
Level 6 should arrive when the team has escaped the immediate insertion sphere and established itself in the wider volcano web.
Strong indicators are: resolving roughly three meaningful playable micronodes or equivalent challenges; entering an interior network or otherwise breaking out of the local surface cluster; and experiencing at least one consequential rival, local-faction, or route-information interaction.
A freakishly fast shortcut does not automatically grant a level after one travel scene, but the milestone should not be withheld merely because the party chose an unusual route.

### Level 6 to Level 7: Network Mastery

Planning target: approximately 5-7 sessions at level 6, usually around campaign sessions 9-13.
Level 7 should arrive when the players have stopped merely discovering routes and have begun using the web strategically.
Strong indicators are: meaningful experience across several major areas or a long-range connector; active participation in the gem economy through acquisition, loss, trade, theft, ransom, alliance, or negotiation; and deliberate route choices based on rivals, safety, secrecy, Favor, or known destinations.
The milestone should reflect demonstrated understanding of the competition rather than require possession of a specific number of gems.

### Level 7 to Level 8: Qualification Race

Planning target: approximately 5-7 sessions at level 7, usually around campaign sessions 14-20.
Level 8 should arrive when the party has become a credible participant in the finite qualification race.
Strong indicators are: reliable access to one or more routes feeding the inner convergence network; enough gem knowledge and relationships to pursue missing colors intentionally; and visible compression of the contestant field through eliminations, alliances, hoarding, or the first serious qualification attempts.
Physical discovery of the Crucible can contribute to this state but is not itself an automatic level trigger.

### Level 8 Endgame

Plan roughly 6-8 sessions of level 8 play for final gem maneuvering, convergence, qualification pressure, the Caldera/threshold struggle, and the Prime Victor conclusion.
The total working campaign target therefore remains approximately 20-28 sessions.
## Starting Gem-Color Distribution Philosophy

Gem color should not be permanently tied to geography. Team insertion and starting gem color should be treated as separate assignments so repeated Games do not teach contestants that a particular side of the mountain always contains a particular color.

For a 25-team field, use a constrained random distribution with exactly five copies of each of the five colors.
Each color should begin across at least four different Jungle Ring surface territories, ideally five when the final territory layout permits it.
No surface territory should normally contain more than two starting gems of the same color, and immediately adjacent start positions should usually carry different colors.

No local starting encounter sphere should reliably contain all five colors.
A team should have to enter the wider competition, trade information, or move between networks before a complete set becomes realistically obtainable.
Likewise, no color should be disproportionately tied to low, high, ridge, or apparently advantageous starts.

The final assignment may therefore be randomized within these constraints rather than purely shuffled without validation.
The actual distribution is GM/runtime truth and need not be public knowledge.

## Duplicate Gems at Qualification

A qualification container accepts exactly one gem of each color.
When the complete container is successfully inserted, those five gems are committed permanently to that Victor qualification.

Duplicate gems remain fully usable until the moment of qualification. A team may trade, gift, hide, ransom, or transfer extras to another active team before qualifying.
However, a newly qualified team may not remove additional Gauntlet gems from the active economy.

Any duplicate Gauntlet gems still physically possessed by members of the qualifying team when the Crucible accepts their complete set are rejected from Victor custody and magically reseeded into reachable active nodes in the Caldera or adjacent inner network.
They should not simply appear in one pile beside the qualifying gate, because that would make threshold camping the dominant recovery strategy.

This preserves hoarding as a meaningful pre-qualification strategy without allowing an already-qualified team to permanently eliminate future Victor slots.
## Early Crucible Discovery and Incomplete Qualification

An unusually lucky or well-informed team may discover an outer Crucible threshold before it is close to completing a gem set.
This is allowed and should be treated as valuable strategic knowledge rather than a sequence break.

An unqualified team may:
- Reach and inspect the outer threshold and its visible mechanisms.
- Learn or confirm that one gem of each of the five colors is required.
- Scout one or more final approaches and retreat back into the mountain.
- Witness announcements, arrivals, or evidence of other qualification attempts.
- Potentially communicate with organisers through protected wards or mechanisms when the fiction supports it.

An unqualified team may not:
- Enter the protected Victor staging or Prime Victor arena.
- Use the Crucible as a safe resting area, free resupply point, or organiser sanctuary.
- Deposit a partial set for safekeeping; an incomplete container is rejected without consuming its gems.
- Claim Victor status or leave the Gauntlet through the organiser-controlled exit.
- Attack a team after that team has crossed the successful qualification boundary into protected Crucible custody.

The wilderness-facing side of the threshold remains part of the Gauntlet. Contestants may wait, scout, negotiate, ambush, or withdraw there, but they remain vulnerable and observable.
Because the final approach has multiple threshold routes, controlling one approach should never amount to controlling all qualification access.

Early Crucible discovery therefore changes strategy rather than ending exploration: the team now knows where victory happens and can plan its remaining gem hunt around a known destination.
## Closing Ring Constraint

The concrete micronode graph must support the canonical Closing Ring schedule defined in `campaign-skeleton.md`.
The Map Designer should be able to mark which surface territories and lower/deeper routes fall outside the active arena at each contraction phase without forcing all surviving contestants through a single chokepoint.

The intended contraction sequence is:
- Day 31: peripheral Jungle Ring closes.
- Day 38: most outer surface closes.
- Day 45: lower/deeper routes begin closing from beneath.
- Day 52: safe geography concentrates on upper connectors, Caldera approaches, and Crucible thresholds.

At every stage, several viable route families should remain. The final state should preserve at least 2-3 distinct Crucible threshold approaches.

The outer Crucible design must also provide five wilderness-facing color shrines or reliquaries capable of receiving gems from contestants killed by the Closing Ring. These shrines must remain contestable by active teams and must sit outside protected Victor custody.