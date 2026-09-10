# The Ashen Gauntlet: Interior Mixing Topology V1

Status: Accepted project baseline for campaign topology. Geographic display names remain provisional and may be renamed during scene design without architectural review.

## Purpose

This document defines the first true interior mixing layer reached from the Jungle Ring. It covers the outer and middle topology of the Buried Kingdom, Verdant Expanse, Broken Dwarven Realm, Great Warrens, and Vent-Cities sufficiently to establish contestant mixing, route-family choice, and onward interfaces.

It does not fully define those major areas. It also does not yet define the Veiled Domain, Labyrinth of Ash, Ember Kingdoms, Shattered Heart, Caldera Underworld, Crucible, or scene-scale encounters.

The design starts from the eighteen normal Jungle Ring landing nodes already established:
- BK: `BK-A1`, `BK-C1`, `BK-G1`;
- VE: `VE-A1`, `VE-B1`, `VE-E1`, `VE-F1`;
- DR: `DR-B1`, `DR-C1`, `DR-D1`, `DR-E1`;
- GW: `GW-A1`, `GW-C1`, `GW-F1`, `GW-G1`;
- VC: `VC-B1`, `VC-D1`, `VC-F1`.

The three exceptional Jungle landings `LA-D1`, `VD-E1`, and `SH-G1` remain separate rare bypass seeds and are not absorbed into the ordinary mixing layer.
## Structural Decision

The first interior layer uses **five overlapping subnetworks rather than one central convergence room**.

Each subnetwork has two or three internal hubs. Primary macro connections are represented by at least two distinct bridge edges where practical. Limited macro connections are represented by a single conditional edge.

This produces a dense middle-game web without making any one hub mandatory. A team may change route philosophy after entering the mountain: an archaeological path can spill into dwarven infrastructure, a biosphere can open into a warren, or a Vent-City guide can bypass into engineered works.

The normal mixing layer therefore contains four route technologies:
- archaeological pockets: Buried Kingdom;
- ecological chambers: Verdant Expanse;
- engineered long-range infrastructure: Broken Dwarven Realm;
- dangerous cross-cutting natural tunnels: Great Warrens;
- social/vertical secondary infrastructure: Vent-Cities.

The Broken Dwarven Realm remains the broadest understandable connector, but the combined ecological/warren network and the Vent-Cities provide genuine alternatives rather than feeder branches into the dwarven route.
## Buried Kingdom Outer Web

The Buried Kingdom remains a family of buried settlement pockets rather than one continuous city.

| Entry branch | Intermediate node | Hub | Structural identity |
|---|---|---|---|
| `BK-A1` | `BK-A2` Flooded Lane | `BK-H1` Ashwell Crossing | wet settlement pocket cut open from Raincoil |
| `BK-C1` | `BK-C2` Processional Hollow | `BK-H2` Ancestor Court | buried civic/ritual pocket beneath Blackwater |
| `BK-G1` | `BK-G2` Rootbound Quarter | `BK-H3` Buried Gatehouse | root-split settlement pocket beneath Splitroot |

Internal edges:
- `BK-H1 <-> BK-H2`: damaged buried civic road;
- `BK-H2 <-> BK-H3`: surviving tomb/processional route;
- no normal `BK-H1 <-> BK-H3` edge.

The missing third side is intentional. Moving between distant buried pockets may be easier by passing through later dwarven excavation or creature-made tunnels than by remaining inside the Buried Kingdom itself. This preserves the area's fragmented archaeological identity.
## Verdant Expanse Outer Web

The four Jungle penetrations enter two different biosphere systems rather than one giant cavern.

| Landing | Hub | Structural identity |
|---|---|---|
| `VE-A1`, `VE-B1` | `VE-H1` Rainvault Basin | lower enclosed watershed with two unrelated exterior breaches |
| `VE-E1`, `VE-F1` | `VE-H2` Cloudroot Bowl | higher enclosed forest reached from cliff and terrace breaches |

The two bowls connect through `VE-X1` Crown Spillway.

Edges:
- `VE-H1 <-> VE-X1`: dangerous ecological/maintenance ascent;
- `VE-X1 <-> VE-H2`: dangerous condensation spillway route.

The spillway is not the only way contestants can move between the two Verdant subregions. A team may leave Rainvault into dwarven works or warrens and later enter Cloudroot from another network. This prevents the Expanse from becoming a single mandatory ecological corridor.
## Broken Dwarven Realm Outer Web

The Dwarven Realm begins as three transport districts linked in a triangle. This is the first strongly legible long-range network contestants can learn and deliberately exploit.

| Landings | Hub | Role |
|---|---|---|
| `DR-B1`, `DR-C1` | `DR-H1` Reservoir Crown | waterworks / aqueduct junction |
| `DR-D1` | `DR-H2` Haulage Exchange | road, rail, and cargo-route junction |
| `DR-E1` | `DR-H3` Cliff Lift Ward | vertical transport and high shelf infrastructure |

Internal edges:
- `DR-H1 <-> DR-H2`: damaged aqueduct-service trunk;
- `DR-H2 <-> DR-H3`: surviving cargo spine;
- `DR-H1 <-> DR-H3`: conditional counterweight lift requiring restoration or alternate access.

No one dwarven hub controls the entire engineered network. Even before the lift is restored, contestants can route around a blocked district through the other mixing regions.
## Great Warrens Outer Web

The Warrens use three junction zones with several cross-cuts. Their routes are often faster than dwarven roads but less stable and less predictable.

| Landings | Hub | Role |
|---|---|---|
| `GW-A1`, `GW-C1` | `GW-H1` Molt Galleries | old multi-generation burrow junction |
| `GW-F1` | `GW-H2` Ribbed Descent | broad sloping bore crossing volcanic strata |
| `GW-G1` | `GW-H3` Split Jaw | fractured predator tunnels around a fault |

Internal edges:
- `GW-H1 <-> GW-H2`: old abandoned megafauna bore;
- `GW-H2 <-> GW-H3`: dangerous broken bore;
- `GW-H3 <-> GW-H1`: unstable predator route that may temporarily change state.

The triangle means no single Warren junction is globally mandatory. Route state can change during the campaign without disconnecting the natural route family completely.
## Vent-Cities Outer Web

The three Jungle vent penetrations reach different kobold clan gates. The Vent-Cities are navigable primarily through social knowledge, permission, guides, or routes learned from inhabitants.

| Landing | Hub | Role |
|---|---|---|
| `VC-B1` | `VC-H1` Copperdraft Gate | western clan / trade access |
| `VC-D1` | `VC-H2` Cinderstep Gate | hot central chimney access |
| `VC-F1` | `VC-H3` Smokeweft Gate | terrace-side vertical access |

`VC-S1` Smoke Market is a social convergence node reached from all three clan networks, but it is deliberately not mandatory.

Edges:
- each of `VC-H1`, `VC-H2`, and `VC-H3` connects to `VC-S1` through social/guide-dependent routes;
- `VC-H1 <-> VC-H2`: hidden maintenance bypass;
- `VC-H2 <-> VC-H3`: furnace crawl usable with suitable access or guidance.

A hostile relationship with one clan can therefore close useful routes without destroying the entire Vent-City route family.
## Primary Cross-Area Bridges

Primary macro connections use multiple distinct bridge edges so losing one bridge does not remove the whole relationship.

| Macro pair | Bridge 1 | Bridge 2 | Route logic |
|---|---|---|---|
| BK <-> DR | `BK-H1 <-> DR-H1` | `BK-H3 <-> DR-H2` | dwarven excavations broke into separate buried districts |
| BK <-> GW | `BK-H2 <-> GW-H1` | `BK-H3 <-> GW-H3` | creature tunnels cut through buried settlement strata |
| VE <-> DR | `VE-H1 <-> DR-H1` | `VE-H2 <-> DR-H3` | dwarven waterworks and cliff infrastructure breached biospheres |
| VE <-> GW | `VE-H1 <-> GW-H1` | `VE-H2 <-> GW-H2` | burrows punctured separate ecological chambers |
| DR <-> GW | `DR-H2 <-> GW-H2` | `DR-H3 <-> GW-H3` | warrens intersect haulage and vertical works |
| DR <-> VC | `DR-H1 <-> VC-H1` | `DR-H3 <-> VC-H3` | kobolds reuse dwarven maintenance and ventilation infrastructure |

These twelve bridge edges form the ordinary mixing backbone. They deliberately land on different hubs rather than routing every macro relationship through one central exchange.
## Limited Cross-Area Bridges Within the Mixing Layer

The matrix permits four additional limited relationships among these five areas. Each is represented once.

| Macro pair | Edge | Condition / identity |
|---|---|---|
| BK <-> VE | `BK-H1 <-> VE-H1` | collapsed ancient irrigation breach; difficult to identify from the buried side |
| BK <-> VC | `BK-H2 <-> VC-H1` | narrow ancestral chimney; practical access depends on kobold knowledge |
| VE <-> VC | `VE-H2 <-> VC-H3` | high botanical ventilation duct; size/access restrictions possible |
| GW <-> VC | `GW-H2 <-> VC-H2` | creature-broken furnace duct; hazardous and politically sensitive |

These are shortcuts and route-information assets, not baseline roads. They should be discoverable, tradable, blockable, or faction-dependent without invalidating the ordinary network.
## Reserved Onward Interfaces

The following destination-side landing IDs are reserved for the next topology pass. They establish macro connectivity without yet defining the full destination subnetworks.

| From | Reserved destination | Class | Meaning |
|---|---|---|---|
| `BK-H1` | `SH-BK1` | P | fault breach from buried settlement into outer Shattered Heart |
| `BK-H3` | `SH-BK2` | P | separate fractured gate into outer Shattered Heart |
| `BK-H2` | `VD-BK1` | L | concealed elven contact exposed beneath the settlement |
| `BK-H1` | `LA-BK1` | L | damaged memory-space breach |
| `VE-H1` | `VD-VE1` | P | surviving botanical/geomantic access |
| `VE-H2` | `VD-VE2` | P | separate high-biosphere elven access |
| `VE-H1` | `SH-VE1` | P | biosphere wall torn open by the Shattering |
| `VE-H2` | `SH-VE2` | P | separate upper fault breach |
| `VE-H2` | `EK-VE1` | L | geothermal ecological maintenance descent |
| `VE-X1` | `LA-VE1` | L | damaged elven memory-architecture connection |
| `VE-H2` | `CU-VE1` | L | rare crown vent toward the inner mountain |
| `DR-H1` | `VD-DR1` | P | engineered access into elven geometry |
| `DR-H3` | `VD-DR2` | P | separate upper dwarven breach into Veiled works |
| `DR-H2` | `EK-DR1` | P | forge/haulage descent toward living fire regions |
| `DR-H3` | `EK-DR2` | P | separate geothermal infrastructure route |
| `DR-H1` | `SH-DR1` | P | shattered waterworks into fault zone |
| `DR-H2` | `SH-DR2` | P | broken transport spine into fault zone |
| `DR-H3` | `LA-DR1` | L | damaged elven annex reached through dwarven works |
| `DR-H3` | `CU-DR1` | L | exceptional high lift/shaft family toward the inner mountain |
| `GW-H1` | `EK-GW1` | P | old deep burrow into hot strata |
| `GW-H3` | `EK-GW2` | P | separate fault-burrow into hot strata |
| `GW-H1` | `SH-GW1` | P | creature tunnel broken open by faulting |
| `GW-H3` | `SH-GW2` | P | separate warren/fault intersection |
| `GW-H1` | `VD-GW1` | L | accidental burrow breach into hidden elven structure |
| `GW-H2` | `CU-GW1` | L | rare rising bore toward the inner mountain |
| `VC-H2` | `EK-VC1` | P | active heat-adapted vertical route |
| `VC-H3` | `EK-VC2` | P | separate clan-controlled hot chimney |
| `VC-H1` | `SH-VC1` | P | vent network cut into faulted infrastructure |
| `VC-H3` | `SH-VC2` | P | separate vent/fault route |
| `VC-H1` | `VD-VC1` | L | concealed maintenance access into elven structure |
| `VC-H2` | `CU-VC1` | L | difficult high chimney toward the inner mountain |
### Exceptional direct Crucible links

The macro matrix permits limited DR <-> CR and VC <-> CR connections. Their exact micronodes are intentionally **not** instantiated in this pass.

They will be designed together with the outer Crucible threshold network because they are the most likely routes to create an unfairly dominant start if placed casually. The intended form is a damaged/hidden/conditional route to a wilderness-facing threshold, not an ordinary continuation of `DR-H3` or `VC-H*`.

Likewise, the direct Jungle seeds `LA-D1`, `VD-E1`, and `SH-G1` must each traverse at least one destination-local micronode before acquiring useful onward connectivity. They are exceptional discoveries, not one-transition jumps into the middle or late-game convergence core.

## Contestant Mixing Model

The first interior mixing occurs in pairs or small groups rather than globally.

- `VE-H1` can mix contestants arriving from JR-A and JR-B.
- `GW-H1` can mix JR-A and JR-C.
- `DR-H1` can mix JR-B and JR-C.
- `VE-H2` can mix JR-E and JR-F.
- other starts initially enter distinct hubs and meet foreign teams through one or more cross-area bridges.

This is intentional: the first interior hub can expose a team to one distant starting population, while the broader five-area web becomes visible only after additional transitions.
## Closing Ring Mapping

### Days 31 and 38

No additional interior mixing nodes close solely because of the first two contractions. Surface access is being removed, but contestants already inside the mountain retain the interior network.

### Day 45

In addition to the landing closures already established by `jungle-ring-topology-v1.md`, close:
- `BK-A2` Flooded Lane;
- `BK-C2` Processional Hollow;
- the edges linking those nodes to their already-closing Jungle-side branches.

The previously established Day 45 landing closures remain: `BK-A1`, `BK-C1`, `GW-C1`, `GW-G1`, `DR-C1`, and `VE-F1`.

All five mixing subnetworks still retain active hubs after this contraction. Engineered, ecological, natural, and social route families therefore remain usable even though several low/deep ingress branches have been consumed.

### Day 52

All landing, intermediate, hub, spillway, and Smoke Market nodes defined as part of this first mixing layer become unsafe by the Final Contraction.

Destination-side nodes reserved under **Onward Interfaces** belong to later inner subnetworks and receive their own contraction status in the next topology pass. The practical effect is that contestants must have moved beyond the outer/middle mixing layer before Day 52 rather than being able to camp a familiar early hub.
## Structural Validation

The hub-level core consists of sixteen nodes: the three BK hubs, two VE hubs plus Crown Spillway, three DR hubs, three GW hubs, three VC hubs, and Smoke Market.

Treating ordinary and primary edges as bidirectional for structural analysis:
- the hub-level core has no articulation point;
- removing any single core hub still leaves the remaining core connected;
- the same remains true when the four limited cross-area shortcuts are excluded;
- the core has node connectivity 2 and edge connectivity 2, so at least two independent failures are required before a global split becomes possible.

This is the desired baseline. Individual local routes can be blocked, collapsed, occupied, or politically closed without turning one incident into a campaign-wide mandatory chokepoint.

## Mixing Distance Check

Using only the normal Jungle landing nodes and this mixing graph, the closest foreign-territory landing pairs are generally two to four micronode transitions apart after entering the interior.

The deliberately quick pairings are A/B through Rainvault, A/C through the Molt Galleries, B/C through Reservoir Crown, and E/F through Cloudroot. Other territory pairings require additional hub or cross-area movement.

Because teams must already traverse their insertion feeder, territory hub, penetration mouth, and first interior landing before this calculation begins, this produces gradual mixing rather than immediate all-arena contact.
## Route-Fairness Check

No Jungle territory owns all of the desirable route properties.

- JR-A reaches BK, VE, and GW, giving broad natural/archaeological choice but no direct engineered or social entry.
- JR-B reaches VE, DR, and VC, giving strong infrastructure/social choice but no direct Warren or Buried entry.
- JR-C reaches BK, DR, and GW, but all three original ingress branches are among those overtaken earliest by the Day 45 contraction.
- JR-D reaches DR and VC normally; its direct Labyrinth seed remains dangerous and exceptional.
- JR-E reaches VE and DR normally; its direct Veiled seed remains conditional and must not skip destination-local traversal.
- JR-F reaches VE, GW, and VC, but one of those ingress branches closes at Day 45.
- JR-G reaches BK and GW normally; its direct Shattered Heart seed is hazardous and remains outside the normal mixing core.

The network therefore creates different strategic starts without making one territory reliably shortest, safest, broadest, and easiest to understand at once.

## Next Map-Design Boundary

The next topology pass should construct the **network-mastery and convergence layer**: Veiled Domain, Labyrinth of Ash, Ember Kingdoms, Shattered Heart, and the first Caldera Underworld approaches.

That pass must consume the reserved destination IDs in this document, integrate the exceptional Jungle seeds `VD-E1`, `LA-D1`, and `SH-G1`, and determine which inner routes remain viable through Day 52. It should also establish the 2-3+ genuinely independent final approach families before the outer Crucible threshold itself is designed.