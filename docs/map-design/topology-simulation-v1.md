# The Ashen Gauntlet: Topology Simulation V1

Status: Map Designer analysis against `maps/topology/full-volcano-v1.json`. This is not a locked contestant placement or deterministic arena forecast.

## Purpose

This pass tests whether the concrete volcano graph behaves as intended when combined with the current 25-entry contestant field.

It tests:
- whether mechanically sensible insertion assignments exist without forcing unfair local spheres;
- whether any territory repeatedly becomes structurally premium or punitive;
- reliable and exceptional route lengths;
- likely qualification-route congestion;
- late-game threshold usage;
- high-value authored-scene candidates.

The structured summary is `maps/topology/topology-simulation-v1.json`.

## Placement Ensemble

Exact team placement remains deferred because the player party's classes are unknown. Instead, 100 independent local-search placement runs were performed using the suitability and caution rules in `campaign/teams/contestant-field-matrix.md`.

The model respected the 4/4/4/4/3/3/3 territory capacities and penalized unsuitable terrain fits, excessive Overmatch clustering, D/U returning-team co-location, H/Q large-company co-location, excessive magic/mobility clustering, and unbalanced local threat.All **100/100** balanced search runs found a zero-violation placement under those assumptions. This means the seven-territory topology does not force the NPC Designer into one narrow roster arrangement.

Threat values in this test use Inferior=1, Peer=2, Superior=3, Overmatch=4 only as a placement-balancing shorthand.

| Territory | Mean local threat | Observed min | Observed max |
|---|---:|---:|---:|
| JR-A | 2.34 | 1.50 | 2.75 |
| JR-B | 2.42 | 1.75 | 2.75 |
| JR-C | 2.26 | 1.50 | 2.75 |
| JR-D | 2.39 | 1.75 | 2.75 |
| JR-E | 2.40 | 1.67 | 2.67 |
| JR-F | 2.16 | 1.67 | 2.67 |
| JR-G | 2.57 | 2.00 | 2.67 |

JR-G still naturally attracts strong mobility/natural-route teams, but the balanced search proves that this can be controlled through placement rather than requiring a topology change. It should receive deliberate roster balancing during exact insertion assignment.

The player party remained placeable in JR-A, JR-B, JR-C, or JR-F without violating the current requirement for three ordinary macro choices and without requiring an exceptional route to make the start viable.## Qualification-Oriented Route Simulation

A second simulation sampled **2,500 routes**: 25 teams across each of the 100 balanced placement fields.

This is a route-pressure model, not a complete Games simulation. It begins at each assigned territory hub after local dispersal and asks how a team with its current mechanical route preferences would move toward a Crucible threshold.

Reliable-route simulation excludes limited links and routes explicitly marked hidden or conditional. Dangerous, social, geomantic, memory, and ecological routes receive small team-specific preference costs based on the contestant matrix. Small random jitter prevents deterministic tie-breaking from creating false congestion.

Mean hub-to-threshold path length was **9.32 transitions**. Exact insertion-anchor reliable distances remain 11-12 because the local Jungle feeder/hub traversal happens before this simulation starts.

### Threshold pressure

Before the Shattered Heart correction, simulated threshold choices were approximately:
- Furnace Gate: 54.2%;
- Crater Gate: 42.1%;
- Crown Gate: 3.6%.

Crown Gate was therefore technically viable but strategically underused.The corrected Shattered Heart assignments produce:

| Threshold | Simulated routes | Share |
|---|---:|---:|
| `CR-O1` Furnace Gate | 1,113 | 44.5% |
| `CR-O2` Crater Gate | 718 | 28.7% |
| `CR-O3` Crown Gate | 669 | 26.8% |

This is not intended as a fixed 45/29/27 outcome. The important result is that all three gates now attract rational reliable traffic without requiring a limited shortcut.

The correction does not create a faster normal starting territory. Reliable territory-hub best distances remain 9-10 transitions, and insertion-anchor best distances remain 11-12.

## Route Pressure Hotspots

The strongest reliable qualification-flow nodes after correction are:

| Node | Working name | Simulated traversals |
|---|---|---:|
| `CU-H1` | Furnace Rim | 1,113 |
| `CU-H2` | Obsidian Crown | 718 |
| `SH-H2` | Suspended Ward | 679 |
| `SH-H4` | Crown Fracture | 669 |
| `CU-H3` | Steam Crown | 669 |
| `SH-H3` | Red Rift | 644 |
| `DR-H2` | Haulage Exchange | 578 |
| `EK-H2` | Chainforge Reach | 434 |
| `VC-H1` | Copperdraft Gate | 430 |
| `GW-H3` | Split Jaw | 425 |
| `GW-H1` | Molt Galleries | 406 |
| `SH-H1` | Broken Aquifer | 325 |Flow is only one signal. Reliable strategic betweenness also highlights `SH-H4`, `SH-H2`, `SH-H3`, `SH-H1`, all three dwarven hubs, `VD-H3`, `VD-H1`, `GW-H1`, both Verdant hubs, and the three Caldera hubs.

This supports the intended architecture: Dwarven infrastructure dominates understandable midgame movement, the Shattered Heart becomes the main collision mesh, and the Caldera compresses traffic without one universal staging node.

## Scene-Production Priority

Topology does not justify mapping every micronode. The following priority model should guide later scene authoring.

### Priority A: structural anchor scenes

These nodes should receive strong authored treatment when their campaign phase becomes relevant:
- the eventual player territory hub and its first meaningful branching scene;
- `DR-H1` Reservoir Crown and `DR-H2` Haulage Exchange as legible network-mastery anchors;
- `GW-H1` Molt Galleries and `GW-H3` Split Jaw as natural-route alternatives;
- `VE-H1` Rainvault Basin and `VE-H2` Cloudroot Bowl as the two major ecological worlds;
- all four Shattered Heart hubs because they combine high centrality, rival convergence, and distinct route consequences;
- all three Caldera hubs and their threshold approaches;
- the outer Crucible threshold family.

These are campaign anchors, not instructions to build them all before session one.### Priority B: route-identity scenes

These may carry less raw traffic but are disproportionately important because they make one route family feel different from another:
- `VC-S1` Smoke Market: social navigation and route-information economy;
- `VD-H3` Starfold Axis: high-value geomantic navigation and late Veiled survival;
- `LA-H2` Returning Gallery: strange lateral shortcut and Day-52 surviving Labyrinth remnant;
- `EK-H3` Ember Stair: living-fire politics with credible inner ascent;
- `DR-H3` Cliff Lift Ward: vertical infrastructure and the exceptional Broken Sky Lift opportunity;
- the exceptional DR/VC/SH upper connectors when discovered.

### Priority C: selective optional scenes

Reward dead ends, ordinary landings, and local bridge nodes should normally remain lightweight until an encounter, secret, sponsor event, rival collision, or route-information reward gives them a reason to become a tactical scene.

## Interpretation Limits

The simulation does not model:
- gem-color targets or known rival gem ownership;
- injuries, depleted spells, supplies, alliances, or sponsor aid;
- route discoveries acquired during play;
- local inhabitants refusing passage;
- players deliberately choosing a longer route to avoid rivals;
- the final Prime Victor procedure.

Those factors should increase route diversity rather than reduce it, so this test is best interpreted as a worst-case check for shortest-path concentration.

## Result

No campaign-scale topology overhaul is required. The network supports diverse contestant placements, reliable route fairness, a 7-9-transition exceptional discovery path, progressive Closing Ring compression, and three meaningfully used final thresholds after the Shattered Heart correction.