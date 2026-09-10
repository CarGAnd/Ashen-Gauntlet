# The Ashen Gauntlet: Full Volcano Topology V1

Status: Accepted project baseline. `maps/topology/full-volcano-v1.json` is the canonical campaign-topology source. Geographic display names remain provisional and may be renamed during scene design without architectural review.

## Purpose

This is the first single reference for the concrete navigable volcano. It does not replace the Campaign Architect's macro-region matrix; it implements that matrix at micronode scale.

The structured source is `maps/topology/full-volcano-v1.json`, generated from:
- `maps/topology/jungle-ring-v1.json`;
- `maps/topology/interior-mixing-v1.json`;
- `maps/topology/inner-convergence-v1.json`.

Detailed encounter content and battlemap geometry remain separate scene-scale work.

## Consolidated Graph Size

The current graph contains **193 micronodes** and **281 explicit edges**.

| Area | Nodes |
|---|---:|
| Jungle Ring | 73 |
| Buried Kingdom | 9 |
| Verdant Expanse | 7 |
| Broken Dwarven Realm | 8 |
| Great Warrens | 7 |
| Vent-Cities | 8 |
| Veiled Domain | 12 |
| Labyrinth of Ash | 10 |
| Ember Kingdoms | 11 |
| Shattered Heart | 23 |
| Caldera Underworld | 17 |
| Outer Crucible threshold | 8 |

Node roles intentionally differ in authored weight. The graph includes 25 insertion anchors, 67 landing nodes, 37 hubs, 21 Jungle penetration mouths, 17 ordinary traversal nodes, 6 reward dead ends, 5 bridge nodes, 3 exceptional upper connectors, 3 threshold approaches, 3 outer thresholds, and 5 gem-recovery shrines.

Edges are likewise not interchangeable: 154 are internal, 82 primary, 35 limited/conditional, and 10 threshold-network edges.

## Campaign-Scale Shape

The volcano now has four structural behaviors rather than floors:

1. **Dispersal:** seven partially isolated Jungle territories hold the 25 insertion anchors.
2. **Mixing:** BK/VE/DR/GW/VC overlap through redundant historical and natural route families.
3. **Network mastery:** VD/LA/EK and the wider middle network create lateral, social, magical, dangerous, and informational alternatives.
4. **Convergence:** SH and several non-SH upper routes compress toward three connected Caldera sectors and three outer Crucible thresholds.

The Shattered Heart is the broadest late collision region, but it is not mandatory. The Veiled Domain, Labyrinth, Ember Kingdoms, and limited high connectors can reach the Caldera without passing through one universal Heart node.## Reliable Versus Exceptional Graph

For structural testing, a reliable graph excludes limited links plus routes explicitly marked hidden or conditional. Its main component contains 185 nodes. The remaining tiny components are exactly the rare Jungle strange-route mouths, the Cloudfang Veiled seed branch, and the exceptional DR/VC/SH upper threshold connectors.

This distinction is intentional. A route can exist physically without being baseline contestant knowledge or dependable ordinary navigation.

Using reliable routes only, the best insertion-anchor-to-threshold distance is **11-12 transitions** across all 25 starts. When all limited and exceptional discoveries are available, the best distances become **7-9 transitions**.

This matches the canonical pacing target: an informed and fortunate team can reach the threshold unusually quickly, while normal contestants still traverse a meaningful portion of the volcano.

The reliable graph has an entry-to-threshold minimum node cut of **3** when the seven Jungle territory hubs are treated as starting sources and the three outer Crucible gates as destinations. No single node or pair of nodes can globally block qualification access.

## Shattered Heart Routing Correction

Full-graph simulation exposed an unnecessary bias toward Furnace and Crater gates. Two Shattered Heart landing assignments were therefore corrected without changing any macro-area relationship:

- `SH-DR1` now enters `SH-H1` Broken Aquifer rather than Suspended Ward. This also matches its origin in Reservoir Crown waterworks.
- `SH-DR2` now enters `SH-H4` Crown Fracture rather than Red Rift, giving the separate dwarven transport breach a distinct upper collision route.

No edge class changed. Both DR-to-SH interfaces remain primary connections exactly as required by the structural handoff.## Closing Ring Transformation

The graph remains connected at every canonical contraction when all currently viable route classes are considered.

| State | Active nodes | Active edges | Components |
|---|---:|---:|---:|
| Open field | 193 | 281 | 1 |
| Day 31 | 162 | 250 | 1 |
| Day 38 | 148 | 231 | 1 |
| Day 45 | 112 | 182 | 1 |
| Day 52 | 33 | 40 | 1 |

The contraction therefore reduces geography rather than selecting one route.

Day 31 consumes insertion ground and reward peripheries. Day 38 removes ordinary Jungle feeders and surface bridges. Day 45 ends the surface campaign and removes selected low/deep first-layer branches. Day 52 removes the outer/middle interior and leaves upper inner remnants, Caldera sectors, threshold approaches, outer gates, and shrine geography.

The Day-52 network still includes multiple surviving histories: Veiled, Labyrinth, Ember, Shattered Heart, Caldera, and exceptional upper connectors.

## Final Threshold Architecture

Normal qualification approaches remain:
- `CU-H1 -> CU-T1 -> CR-O1` Furnace Gate;
- `CU-H2 -> CU-T2 -> CR-O2` Crater Gate;
- `CU-H3 -> CU-T3 -> CR-O3` Crown Gate.

Exceptional DR, VC, and SH routes terminate at these same public threshold sectors rather than private gates. The five recovery shrines remain on the wilderness-facing reliquary circuit outside protected Victor custody.## Battlemap and Authorship Boundary

A micronode does not automatically require a Dungeondraft battlemap.

Default production interpretation:
- insertion anchors: positioning/state only unless play returns there before closure;
- ordinary landings: travel/journal nodes unless encounter content justifies a map;
- territory hubs and major interior hubs: strong authored-scene candidates;
- bridge, social, strange, and reward nodes: author selectively when their route decision is itself playable;
- threshold approaches and outer gates: full authored endgame scenes;
- gem shrines: preferably incorporated into the outer-threshold map family rather than five isolated maps.

This prevents the 193-node graph from becoming a requirement for 193 tactical scenes.

## Downstream Uses

`full-volcano-v1.json` is intended to support:
- contestant location and route simulation;
- known-versus-actual route state;
- shortest and preferred-route analysis;
- Closing Ring node availability;
- scene-production prioritization;
- route-information rewards;
- later Foundry navigation/state tooling.

Exact rival insertion anchors and starting gem colors remain deliberately absent. The NPC placement pass should consume this graph after player-party capabilities are known.

Protected Crucible interior architecture and the Prime Victor contest remain outside this topology version.