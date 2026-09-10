# The Ashen Gauntlet: Campaign Skeleton

## Purpose

This document defines the campaign-scale game structure of The Ashen Gauntlet.
It is the canonical source for progression, volcano-web logic, contestant distribution, gem victory rules, Favor, Spotlight, and the intended relationship between exploration and competition.

Detailed cultures and history belong in `volcano-lore.md`.
Detailed macro-region identities belong in `major-areas.md`.
Exact micronode maps, scene layouts, encounters, and Dungeondraft implementation belong to the Map Designer and Scene Designer workstreams.

## Core Campaign Premise

The organisers control the Crucible at the summit but do not control the volcano below it.
Contestants are magically inserted at established starting positions across the Jungle Ring and must survive, explore, negotiate, and compete their way through the living mountain.

The volcano is a three-dimensional spiderweb rather than a sequence of floors.
Physical altitude, graph distance, and actual progress toward victory are deliberately different concepts.
A route may descend deep below a starting point and still move a team meaningfully closer to the Crucible.

The campaign should reward navigation, diplomacy, combat, bargaining, exploration, rescue, betrayal, deception, resource management, and alliances as legitimate ways to progress.
## Volcano Web Architecture

The campaign graph has three conceptual scales:
- Major areas define broad worlds, cultures, ecologies, and traversal identities.
- Micronodes define meaningful travel destinations and are the primary unit for tracking contestant movement.
- Scenes and encounters define the tactical or narrative content inside a micronode.

Micronodes should not be designed as interchangeable three-exit rooms.
Useful structural roles include ordinary nodes, hubs, bridge nodes, dead ends with rewards, hidden nodes, shortcuts, vertical connectors, cross-layer nodes, and convergence nodes.

Edges between micronodes also carry meaning.
Connections may be roads, caves, rivers, shafts, lifts, burrows, vents, cliffs, magical routes, or crawlspaces.
Some are directional, hidden, dangerous, faction-dependent, equipment-dependent, or only usable after activation.

The actual volcano graph and the graph known to the players are separate.
Contestants discover the web gradually, and rival teams may know routes the players do not.
Route information is therefore a strategic resource that can be traded, stolen, concealed, or bargained over.
## Starting Network

The Jungle Ring is a full major campaign area and the insertion network for the Games.
At least 25 established starting positions are distributed across several partially disconnected jungle, ravine, cliff, and ridge territories.

Starting positions are not all equivalent and are not arranged as a simple outer ring.
Some are low, some high, some apparently close to the summit, and some deep in difficult terrain.
Apparent physical advantage should not reliably predict actual graph advantage.

A starting position is usually a lightweight insertion node rather than a major authored scene.
It should feed into nearby playable surface micronodes, which then provide several possible penetrations into selected interior regions.

Different surface territories do not need to connect directly to each other.
Two geographically nearby teams may be graphically isolated, while teams on opposite sides of the volcano may later converge through the same dwarven, verdant, vent, or warren network.

The mountain should progressively mix initially separated contestant populations rather than allowing every team to hunt every other team immediately.
## Major Areas

The current major campaign areas are:
1. The Jungle Ring.
2. The Buried Kingdom.
3. The Verdant Expanse.
4. The Broken Dwarven Realm.
5. The Veiled Domain.
6. The Labyrinth of Ash.
7. The Great Warrens.
8. The Ember Kingdoms.
9. The Vent-Cities.
10. The Shattered Heart.
11. The Caldera Underworld.
12. The Crucible as the separate organiser-controlled destination.

These are not progression tiers.
Most areas span multiple character levels, and several should interconnect directly.
Some remain semi-isolated with only a handful of breaches or secret routes.

The web should become more interconnected during the middle campaign and then increasingly convergent near the Caldera Underworld and Crucible.
## Level Progression

Levels are associated primarily with micronode threat and campaign state rather than with whole major areas.
A major area may contain level 5, 6, 7, and occasionally level 8 nodes depending on depth, danger, inhabitants, and route significance.

The intended progression is:
- Level 5: dispersal, first exploration, local rivals, learning the arena.
- Level 6: the interior web opens and teams begin understanding the mountain's deeper connectivity.
- Level 7: rival strategy, gem ownership, alliances, and competition become dominant campaign pressures.
- Level 8: inner convergence, qualification attempts, remaining gem scarcity, and the Crucible race.

Milestone advancement should be based on meaningful campaign penetration and experience rather than on owning a specific number of gems.
Gems can change hands too unpredictably to serve as reliable level gates.

Micronodes may be tagged by intended threat band such as T5, T6, T7, T8, or Extreme.
Extreme means straightforward combat is not the expected solution; powerful dragons, sphinxes, purple worms, giants, or other overwhelming threats may exist in the world before the party could defeat them conventionally.
## Route Length and Campaign Pacing

A freakishly lucky team with the right starting position, correct information, and optimal route may physically reach the Crucible in roughly 7-9 meaningful micronode transitions.
A fast purposeful route should more commonly require roughly 10-14 micronodes.
A typical contestant journey should involve roughly 18-25 micronodes, while highly exploratory or diplomacy-heavy campaigns may involve more.

Reaching the Crucible early does not equal victory because qualification depends on completing a five-color gem set.
The topology therefore does not need artificial walls preventing an unusually fortunate team from finding the summit too soon.

The intended full campaign remains approximately 20-28 sessions as a working target rather than a hard limit.
The broad emotional progression is isolation and discovery, expanding complexity, competitive convergence, and finally collision at the Crucible.

The Map Designer should optimize the graph for multiple viable routes rather than one balanced mandatory sequence.
The Campaign Architect should validate that no single start has a consistently dominant path and that different starts produce different early rival encounter spheres.
## Gem Economy and Qualification

The Games contain 25 contestant teams and 25 total gems.
There are five gem colors, with exactly five gems of each color in circulation.
Every team begins the Gauntlet carrying exactly one gem.

To qualify as a Victor, a team must obtain one gem of each of the five colors, place the complete set in its special container, reach the Crucible, and successfully insert the container into the Crucible mechanism.
Because only five gems of each color exist, the arena can mathematically produce no more than five complete sets.

Duplicate colors are fully legal to collect and retain.
Extra gems may be used as bargaining chips, alliance resources, ransom, insurance against theft, gifts to allied teams, bait, or deliberate denial of scarce colors to rivals.
Hoarding therefore creates strategy rather than being treated as wasted inventory.

Gems should remain part of the live economy until committed to the Crucible.
They are effectively indestructible for campaign purposes; if a gem becomes genuinely unrecoverable through lava, collapse, planar loss, or similar circumstances, the Gauntlet's magic eventually returns it to circulation at a reachable location.

When a completed five-color set is successfully inserted, those five gems leave circulation permanently.
Each successful qualification therefore reduces the number of remaining possible Victors by one and sharply increases late-game scarcity.
## Victors and Prime Victor

Completing a five-color set and satisfying the Crucible insertion requirement makes a team a Victor.
Up to five teams can therefore qualify during a Games cycle.

The Prime Victor is a separate endgame distinction determined within the organiser-controlled Crucible.
The exact final contest remains intentionally open for later design, but it should provide a meaningful culmination rather than simply awarding Prime Victor to whichever team first discovered the fastest route.

The Crucible should therefore feel like a sudden transition from uncontrolled wilderness into deliberate spectacle, rules, architecture, and organiser authority.

## Favor

Favor is tracked separately for important organisers or elite patrons rather than as one universal reputation score.
Organisers should embody conflicting philosophies so that the same action can impress one and disappoint another.

Useful organiser archetypes include the Warrior, Merciful, Schemer, Seeker, Showman, Traditionalist, Survivor, and Broker.
These are design roles rather than final character names.
Typical Favor priorities may include:
- Warrior: courage, difficult combat, protecting allies, worthy challenges; dislikes cowardice and pointless bullying.
- Merciful: rescue, healing, surrender, protection of locals; dislikes cruelty and needless execution.
- Schemer: deception, theft, traps, misdirection, exploiting rivals; dislikes unimaginative brute force.
- Seeker: exploration, puzzles, hidden routes, preservation of knowledge; dislikes destroying discoveries.
- Showman: spectacle, daring reversals, speeches, flair, dramatic risks; dislikes anticlimax and wasted public attention.
- Traditionalist: oaths, honourable contests, ritual, keeping agreements; dislikes oathbreaking and dishonour.
- Survivor: resource discipline, retreat when sensible, terrain mastery, endurance; dislikes waste and reckless vanity.
- Broker: alliances, trades, gem deals, coalition building, negotiated passage; dislikes pointless feuds that destroy useful leverage.

Favor should respond to roleplay as well as tactical outcomes.
Negotiations, promises, mercy, public speeches, deception, exploration choices, treatment of local inhabitants, and how contestants handle victory or defeat are all valid Favor events.

Favor is always active because the organisers can observe contestant activity through the bracelet-linked Games magic even when the audience is not focused on that team.
## Spotlight

Spotlight is an audience-facing state layered on top of constant organiser observation.
When a team receives the Spotlight, the contestants' bracelets anchor or manifest a visible magical observation orb that allows the public to tune directly into that team.

Spotlight amplifies Favor consequences rather than enabling Favor.
A dramatic action under Spotlight should matter more to the organisers whose values it serves, while public failure, dishonour, cruelty, waste, or anticlimax can also matter more to organisers who disapprove.

There should not be a universal rule that inactivity automatically loses Favor.
Context and organiser philosophy matter: hiding from a dragon may bore the Showman while impressing the Survivor.

The system should create moments where players consciously decide whether to perform for the audience, exploit the attention, reject it, or take the safer option despite being watched.
Exact numerical multipliers, duration, selection logic, and Foundry implementation belong to the Systems Designer.

## Rival Teams and Arena State

All 25 teams matter because every team begins with a gem, but not all 25 require equal narrative detail.
A smaller authored roster should remain persistent and character-driven, while background teams can be abstracted until they become relevant.
The campaign should track important teams at micronode level rather than room-by-room.
Useful runtime state includes current node, previous node, intended destination, current objective, gem inventory, condition, relationships, and what the players believe about that team's location.

Arena advancement should occur abstractly after meaningful time passes, such as major travel, completion of an important node, or a long rest.
Rivals may move, explore, rest, negotiate, hunt another team, search for shortcuts, recover resources, trade, ambush, or attempt qualification.

Team route preferences should reflect personality.
Some teams favor the shortest route, some avoid conflict, some hunt gem-rich rivals, some prefer secret passages, and others explore shrines or pursue ideological goals even when those choices are inefficient.

Rival encounters should emerge naturally when routes converge rather than being scripted into fixed locations.
The same campaign graph should support very different rival relationships depending on the player team's starting position and chosen route.

## Design Responsibility Boundary

The Campaign Architect owns the logic of progression, connectivity, convergence, route fairness, level bands, gem economy, and campaign pacing.
The Map Designer owns the concrete micronode web, visual topology, exact node placement, map requirements, and tactical spaces within those constraints.
The Scene Designer owns encounter content and consequences inside individual nodes.
The Systems Designer owns implementation details for Favor, Spotlight, gems, and contestant-state automation.
## Closing Ring Timer Pressure

The Gauntlet has a hard anti-stall timer implemented through the same bracelet-linked containment magic that prevents contestants from escaping the arena.
For the first 30 in-game days, the full Gauntlet remains open. Beginning on day 31, the safe play-space contracts in scheduled stages across both the surface and the subterranean mountain.

Recommended schedule:
- Days 1-30: Open Field. Full Jungle Ring and interior network remain active.
- Day 31: First Contraction. Peripheral Jungle Ring territory begins closing.
- Day 38: Second Contraction. Most outer surface territory becomes unsafe and interior routes dominate.
- Day 45: Third Contraction. Lower and deeper routes begin closing from beneath as well as from the exterior.
- Day 52: Final Contraction. The viable field compresses primarily toward upper connectors, the Caldera Underworld, and the Crucible thresholds.

The Closing Ring should reduce available geography without ever collapsing the campaign to one mandatory corridor. Multiple surviving approach families and at least 2-3 final Crucible threshold routes must remain viable.
### Boundary Behavior and Gem Recovery

The contracting boundary is visible and clearly telegraphed. Contestant bracelets warn before lethal consequences occur, but remaining beyond the active boundary or repeatedly contacting it causes rapidly escalating magical injury and eventual death.
The rule should feel dangerous and absolute without functioning as an unseen instant-kill trap.

If a contestant is killed by the Closing Ring, every Gauntlet gem they carry is extracted by the bracelet-linked Games magic and transferred to its corresponding color shrine at the wilderness-facing outer Crucible threshold.
The five color shrines remain contestable by active, unqualified teams and are not inside protected Victor custody.

Recovered gems should be distributed among their corresponding shrines rather than deposited in one central pile. This keeps each color in circulation, creates late-game flashpoints, and prevents a hiding team from blocking qualification indefinitely.

The Closing Ring is a campaign-pressure system, not evidence that the organisers control the mountain itself. They control the containment magic around contestants and the Crucible, while the terrain, inhabitants, ruins, and dangers inside the shrinking field remain uncontrolled.

Favor and Spotlight continue to function during contractions. Retreats, rescues, betrayals, last-second escapes, chokepoint defenses, negotiated passage, and other pressure-driven choices can become especially potent Favor events when observed or Spotlighted.