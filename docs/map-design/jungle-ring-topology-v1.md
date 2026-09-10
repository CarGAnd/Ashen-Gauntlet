# The Ashen Gauntlet: Jungle Ring Topology V1

Status: Accepted project baseline for campaign topology. Geographic display names remain provisional and may be renamed during scene design without architectural review.

## Purpose

This document translates the canonical macro-region connectivity matrix into the first concrete micronode network for the Jungle Ring and its immediate interior penetrations. It does not define detailed encounters or battlemap layouts.

The design preserves the following constraints:
- twenty-five contestant insertion anchors;
- partially isolated early rival populations;
- a three-dimensional web rather than a surface ring or floor stack;
- multiple engineered, natural/ecological, and hidden/social route families;
- sparse limited links to the Veiled Domain, Labyrinth of Ash, and Shattered Heart;
- no direct Jungle Ring connection to the Ember Kingdoms, Caldera Underworld, or Crucible;
- Closing Ring contractions without one mandatory chokepoint.

## Territory Count Decision

Use **seven distinct Jungle Ring surface territories**.

Insertion distribution: **4 / 4 / 4 / 4 / 3 / 3 / 3 = 25 teams**.

Seven is large enough that a team normally begins with only two or three other teams in its local encounter sphere, but small enough that each territory can support meaningful authored traversal rather than becoming a one-team pocket.
## Seven Surface Territories

| Code | Working name | Starts | Physical identity | Primary isolation |
|---|---|---:|---|---|
| JR-A | Raincoil Basin | 4 | wet low jungle, braided streams, sink basins | flood channels, steep basalt shelves |
| JR-B | Broken Canopy | 4 | giant-tree jungle on fractured elevated shelves | canopy gaps, cliff breaks, impassable root walls |
| JR-C | Blackwater Steps | 4 | terraced ravines and dark cataracts | waterfalls, slot ravines, drowned cuts |
| JR-D | Emberridge | 4 | warm ash ridge, fumaroles, scrub jungle | exposed ash slopes, steam fissures |
| JR-E | Cloudfang Escarpment | 3 | high mist forest and cliff ledges | sheer escarpments, cloud-hidden drops |
| JR-F | Ashfall Terraces | 3 | old lava terraces reclaimed by jungle | collapsed lava scarps, unstable talus |
| JR-G | Splitroot Ravines | 3 | deeply divided ridge jungle around giant root systems | chasms, root-bound stone, narrow saddles |

These names are working map identities, not encounter titles. Apparent altitude is deliberately misleading: JR-E looks closest to the summit but does not receive a uniquely short route into the inner mountain.

## Isolation Model

The Jungle Ring is not a walkable circumferential road. Territory boundaries are hard landscape breaks. Ordinary travel within a territory is easier than lateral travel to the next territory.

Direct surface links exist only at four controlled bridge routes. They are not insertion-adjacent and require at least one local traversal node before use. The remaining territory adjacencies are false proximity: contestants may see smoke, cliffs, canopy, or distant movement without possessing a viable direct route.
### Surface bridge routes

| Edge | Type | Purpose |
|---|---|---|
| JR-A-H -> JR-B-O2 | limited ordinary surface crossing | first controlled lateral mixing route |
| JR-C-H -> JR-D-O1 | dangerous surface crossing | ravine-to-ridge mixing route |
| JR-E-H -> JR-F-O2 | social/guide route | crossing is practical only with local route knowledge |
| JR-G-H -> JR-A-O2 | hidden surface crossing | concealed saddle; not part of normal contestant knowledge |

There is deliberately no complete surface loop. Teams wishing to move between other territories must normally enter the interior web and re-emerge elsewhere.

## Micronode Naming and Roles

Insertion anchors use `JR-X-I#`. They are lightweight starting coordinates, not full authored scenes.

Each territory then uses a small local web:
- `O1` and `O2`: ordinary traversal nodes receiving insertion anchors;
- `H`: local hub where routes become meaningfully strategic;
- `R`: optional dead-end/reward node where present;
- `P-*`: penetration node at the surface/interior boundary.

Interior landing nodes use their major-area code plus source territory, for example `BK-A1`. These are the first micronodes clearly belonging to the interior region.

## Insertion Anchor Distribution

| Territory | Anchors | Feeder assignment |
|---|---|---|
| JR-A | I1, I2, I3, I4 | I1/I2 -> O1; I3/I4 -> O2 |
| JR-B | I1, I2, I3, I4 | I1/I3 -> O1; I2/I4 -> O2 |
| JR-C | I1, I2, I3, I4 | I1/I4 -> O1; I2/I3 -> O2 |
| JR-D | I1, I2, I3, I4 | I1/I2 -> O1; I3/I4 -> O2 |
| JR-E | I1, I2, I3 | I1/I2 -> O1; I3 -> O2 |
| JR-F | I1, I2, I3 | I1 -> O1; I2/I3 -> O2 |
| JR-G | I1, I2, I3 | I1/I3 -> O1; I2 -> O2 |
## Territory Graphs

### JR-A Raincoil Basin

Core edges: `O1 -> H`, `O2 -> H`, `O1 -> R`, `H -> P-BK`, `H -> P-GW`, `H -> P-VE`.

- `O1`: flooded trail forks; ordinary traversal.
- `O2`: basalt shelf above braided water; ordinary traversal and hidden bridge origin toward JR-G.
- `H`: Raincoil Confluence; local hub.
- `R`: drowned observation terrace; dead end/reward.
- `P-BK`: sinkgate into an ash-entombed settlement pocket.
- `P-GW`: oversized abandoned beast-cut tunnel.
- `P-VE`: root-choked breach into an enclosed biosphere margin.

### JR-B Broken Canopy

Core edges: `O1 -> H`, `O2 -> H`, `O2 -> R`, `H -> P-VE`, `H -> P-DR`, `H -> P-VC`.

- `O1`: fractured canopy shelf; ordinary traversal.
- `O2`: hanging-root descent; ordinary traversal and receiving side of the JR-A bridge.
- `H`: Crownbreak Shelf; local hub.
- `R`: isolated crown shrine; dead end/reward.
- `P-VE`: overgrown elven maintenance breach.
- `P-DR`: collapsed dwarven survey stair.
- `P-VC`: warm ventilation throat entering kobold-scale infrastructure.
### JR-C Blackwater Steps

Core edges: `O1 -> H`, `O2 -> H`, `O2 -> R`, `H -> P-BK`, `H -> P-DR`, `H -> P-GW`.

- `O1`: cataract shelf; ordinary traversal.
- `O2`: drowned stair-ravine; ordinary traversal.
- `H`: Blackwater Divide; local hub and bridge origin toward JR-D.
- `R`: sealed flood chamber; dead end/reward.
- `P-BK`: collapsed well-road into buried structures.
- `P-DR`: broken drainage gallery into dwarven works.
- `P-GW`: water-cut burrow enlarged by megafauna.

### JR-D Emberridge

Core edges: `O1 -> H`, `O2 -> H`, `O1 -> R`, `H -> P-DR`, `H -> P-VC`, `H -> P-LA`.

- `O1`: steam-scar saddle; ordinary traversal and receiving side of the JR-C bridge.
- `O2`: ash scrub traverse; ordinary traversal.
- `H`: Emberridge Fork; local hub.
- `R`: fumarole overlook; dead end/reward.
- `P-DR`: heat-cracked dwarven haulage tunnel.
- `P-VC`: active vent chimney controlled through local knowledge.
- `P-LA`: unstable ash-memory fissure; limited, dangerous, and initially unrecognized as a route.
### JR-E Cloudfang Escarpment

Core edges: `O1 -> H`, `O2 -> H`, `H -> P-VE`, `H -> P-DR`, `O2 -> P-VD`.

- `O1`: mist-forest ledge; ordinary traversal.
- `O2`: split cliff path; ordinary traversal and concealed route origin.
- `H`: Cloudfang Shelf; local hub and social bridge origin toward JR-F.
- `P-VE`: high condensation spillway into a biosphere crown.
- `P-DR`: inaccessible-looking dwarven cliff door reached by switchback ledges.
- `P-VD`: geometric elven aperture; limited route requiring discovery or activation.

### JR-F Ashfall Terraces

Core edges: `O1 -> H`, `O2 -> H`, `O1 -> R`, `H -> P-GW`, `H -> P-VC`, `H -> P-VE`.

- `O1`: cracked lava terrace; ordinary traversal.
- `O2`: jungle-covered talus shelf; ordinary traversal and receiving side of JR-E social crossing.
- `H`: Ashfall Junction; local hub.
- `R`: abandoned ridge cache; dead end/reward.
- `P-GW`: collapsed lava tube adopted by burrowing creatures.
- `P-VC`: furnace-draft cleft into vent infrastructure.
- `P-VE`: low root-and-water breach into an enclosed ecological chamber.
### JR-G Splitroot Ravines

Core edges: `O1 -> H`, `O2 -> H`, `O2 -> R`, `H -> P-BK`, `H -> P-GW`, `H -> P-SH`.

- `O1`: root bridge ravine; ordinary traversal.
- `O2`: broken saddle path; ordinary traversal and hidden bridge origin toward JR-A.
- `H`: Splitroot Nexus; local hub.
- `R`: old route-marker shrine; dead end/reward.
- `P-BK`: root-opened chamber into a buried village pocket.
- `P-GW`: deep predatory tunnel crossing older strata.
- `P-SH`: fault slit descending into the outer edge of the Shattered Heart; limited and hazardous.

## Immediate Interior Landing Nodes

Every penetration has a distinct landing node so that crossing the surface boundary is a meaningful graph transition rather than an abstract teleport. These nodes are not intended to be equivalent in encounter weight.

| From | Landing | Role | Route family |
|---|---|---|---|
| JR-A P-BK | BK-A1 | bridge node | archaeological |
| JR-A P-GW | GW-A1 | dangerous shortcut | natural |
| JR-A P-VE | VE-A1 | ecological threshold | natural/ecological |
| JR-B P-VE | VE-B1 | ecological threshold | natural/ecological |
| JR-B P-DR | DR-B1 | engineered connector | engineered |
| JR-B P-VC | VC-B1 | social/vertical connector | hidden/social |
| JR-C P-BK | BK-C1 | bridge node | archaeological |
| JR-C P-DR | DR-C1 | engineered connector | engineered |
| JR-C P-GW | GW-C1 | dangerous shortcut | natural |
| JR-D P-DR | DR-D1 | engineered connector | engineered |
| JR-D P-VC | VC-D1 | social/vertical connector | hidden/social |
| JR-D P-LA | LA-D1 | secret/unstable bridge | strange |
| JR-E P-VE | VE-E1 | vertical ecological connector | natural/ecological |
| JR-E P-DR | DR-E1 | engineered vertical connector | engineered |
| JR-E P-VD | VD-E1 | secret activated route | strange |
| JR-F P-GW | GW-F1 | dangerous shortcut | natural |
| JR-F P-VC | VC-F1 | social/vertical connector | hidden/social |
| JR-F P-VE | VE-F1 | ecological threshold | natural/ecological |
| JR-G P-BK | BK-G1 | bridge node | archaeological |
| JR-G P-GW | GW-G1 | dangerous shortcut | natural |
| JR-G P-SH | SH-G1 | limited fault bridge | strange/late-collision |

No landing node above directly enters the Ember Kingdoms, Caldera Underworld, or Crucible. The Dwarven, Vent-City, and Shattered-Heart landings enter outer or middle portions of those networks rather than their exceptional Crucible-linked branches.

## Macro Connectivity Check

Normal Jungle Ring penetrations are deliberately redundant:
- Buried Kingdom: 3 ordinary penetration families (A, C, G).
- Verdant Expanse: 4 ordinary penetration families (A, B, E, F).
- Broken Dwarven Realm: 4 ordinary penetration families (B, C, D, E).
- Great Warrens: 4 ordinary penetration families (A, C, F, G).
- Vent-Cities: 3 ordinary penetration families (B, D, F).

Limited Jungle Ring links remain rare: one to the Labyrinth of Ash, one to the Veiled Domain, and one to the Shattered Heart.
## Closing Ring Mapping

The contraction tags below identify when geography becomes unsafe. They describe arena availability, not destruction of the physical location.

### Day 31: First Contraction

Remove from the active arena:
- all 25 insertion anchors `JR-*-I#`;
- all `R` dead-end/reward nodes;
- the most peripheral approach edge into each `O1`/`O2` feeder, while leaving both feeder nodes reachable from inward routes long enough to retreat.

Effect: contestants cannot remain at their original insertion ground or camp peripheral rewards, but every territory still retains its hub and all interior penetration families.

### Day 38: Second Contraction

Remove from the active arena:
- all ordinary feeder nodes `JR-*-O1` and `JR-*-O2`;
- all four direct surface bridge routes between territories;
- any remaining purely exterior paths that do not lie between a territory hub and an interior penetration.

Effect: most of the Jungle Ring is now gone. Each surviving territory is reduced to its inward hub and penetration mouths, forcing interior movement without selecting one universal entrance.
### Day 45: Third Contraction

Remove from the active arena:
- all seven Jungle territory hubs `JR-*-H`;
- all Jungle-side penetration nodes `JR-*-P-*`;
- lower/deeper immediate landing nodes: `BK-A1`, `BK-C1`, `GW-C1`, `GW-G1`, `DR-C1`, and `VE-F1`.

Effect: the surface campaign is effectively over. The first wave of low/deep interior shortcuts also closes from beneath, but surviving contestants still have multiple engineered, ecological, social, and natural route families elsewhere in the interior web.

### Day 52: Final Contraction

Remove from the active arena the remaining immediate landing nodes from this document that have not already closed. Any route still viable at this point must already have progressed onward into upper/interior connectors, the Shattered Heart, Caldera approaches, or another explicitly final-safe network defined in later topology work.

The later full-volcano graph must retain at least three final approach families. This Jungle Ring document therefore does not designate any immediate insertion connector as permanently safe.

## Node Closure Summary

| Node class | Day 31 | Day 38 | Day 45 | Day 52 |
|---|---|---|---|---|
| insertion anchors | close | closed | closed | closed |
| reward dead ends | close | closed | closed | closed |
| ordinary surface feeders | retreat only | close | closed | closed |
| surface bridge routes | open | close | closed | closed |
| territory hubs | open | open | close | closed |
| Jungle penetration mouths | open | open | close | closed |
| selected low/deep interior landings | open | open | close | closed |
| remaining immediate interior landings | open | open | open | close |
## Route-Fairness Check

No territory receives both uniquely fast macro access and unusually broad early choice.

- JR-A has three ordinary exits, but all enter outer archaeological, ecological, or natural networks.
- JR-B has broad engineered/social choice, but its Dwarven and Vent-City landings are explicitly outer-network entries.
- JR-C has reliable infrastructure access but no limited strange route.
- JR-D has the Labyrinth breach, but that route is unstable and informationally opaque rather than a dependable shortcut.
- JR-E begins physically high, but its apparent altitude is offset by normal outer-network landings; the Veiled route requires discovery/activation.
- JR-F has three ordinary exits but no direct limited macro breach.
- JR-G has the Shattered Heart fault link, but it is limited, hazardous, and not equivalent to entering the inner Shattered Heart convergence network.

The later interior graph must preserve this rule: limited routes may sometimes be faster, but no territory should own a consistently shortest, safest, and easiest-to-discover route to the Crucible.

## Early Rival Encounter-Sphere Check

Before a team reaches its territory hub, its natural rival sphere is only the other teams inserted in the same territory: three other teams in JR-A through JR-D, and two other teams in JR-E through JR-G.

After reaching a hub, contestants can begin leaving through different interior families. Surface mixing is still limited because only four lateral bridge routes exist and none forms a complete circumferential path.

The expected progression is therefore:
1. insertion feeder: 2-3 plausible local rivals;
2. territory hub: local rivals plus occasional bridge contact;
3. first interior landing: contestants from distant territories begin sharing macro networks;
4. deeper DR/VE/GW/VC nodes: true cross-arena mixing begins.

This matches the canonical target of roughly 2-4 other plausible teams during early dispersal without requiring rigid encounter scripting.