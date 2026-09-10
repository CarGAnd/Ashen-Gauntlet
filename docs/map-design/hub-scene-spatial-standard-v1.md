# The Ashen Gauntlet: Hub Scene Spatial Standard V1

Status: Approved production-planning baseline for scene-scale hub design.

## Purpose

A topology hub is a place where route knowledge becomes playable. It must not be represented as a neutral room with equivalent exits labelled by destination.

A good hub lets players understand at least part of the route decision by looking at the environment: construction style, airflow, water, heat, scale, elevation, tracks, vegetation, sound, light, inhabitants, or visible continuation.

## Required Spatial Anatomy

A campaign-facing hub scene should normally contain:

1. **Approach zone:** one or more entry lanes that preserve how the party arrived.
2. **Orientation landmark:** a memorable physical feature visible from much of the map.
3. **Decision space:** enough room to stop, scout, interact, fight, hide, or negotiate without standing inside an exit mouth.
4. **Route arms:** two or more spatially distinct continuations tied to topology edges.
5. **Preview space:** each major route exposes some consequence before commitment.
6. **Repositioning space:** parties can move between route arms without retracing a single-file corridor through one chokepoint.

## Route Legibility Contract

Every primary route arm should communicate at least two of the following before the players leave the hub:
- physical construction or geology;
- relative elevation or slope;
- light/temperature/airflow;
- water or vegetation behavior;
- scale and expected body clearance;
- tracks, debris, tools or signs of inhabitants;
- sound, smell or visible hazard;
- evidence of recent contestant use.

The hub does not need to reveal where a route ultimately leads. It should reveal what kind of route the party is choosing.

Limited or secret routes may intentionally fail this contract until discovered. Once discovered, their physical logic should still make sense in hindsight.

## Map Scale

Typical hub maps should begin around **44–56 cells wide by 36–46 cells high** at 5 feet per square. Larger maps are justified by major elevation changes, rivers, bridges or multiple inhabitable structures rather than empty travel distance.

The center should not consume the whole map. At least one-third of useful playable space should belong to approaches, route previews, side positions or elevation features.

## Tactical Geography

Hub maps should support conflict without assuming conflict occurs. Useful ingredients include offset sightlines, multiple elevations, partial cover, alternate crossings, defensible but non-absolute positions, and routes that become risky when contested.

No single tactical position should control every exit unless that control is itself the authored point of a rare scene. A hub that can be permanently locked by holding one five-foot doorway is structurally suspect.

Route mouths should rarely sit side-by-side on the same wall. Spread them across different edges, elevations or terrain systems so movement through the hub has physical meaning.

## Elevation

A hub should normally use at least two meaningful elevation bands. Three are preferred when the scene includes cliffs, waterfall cuts, terraces, canopy shelves, ruins or vertical infrastructure.

Elevation must be mechanically interpretable. Blueprints should state approximate relative height and how movement occurs between bands: slope, stairs, roots, bridge, climb, drop, lift, chimney, watercourse or other connector.

## Optional Side Content

A hub may contain one small optional element such as an overlook, shrine, cache, social nook, ruined chamber or information vantage. It should not compete with the hub’s primary navigational purpose.

## Hub Anti-Patterns

Avoid:
- one rectangular chamber with three equal doors;
- symmetrical route arms with no environmental distinction;
- decorative elevation that does not affect movement or visibility;
- all exits visible from one square with no scouting value;
- one bridge/door that controls every route through the hub;
- dense props that obscure route geometry;
- route labels doing work the environment should do;
- map edges that imply impossible adjacency between unrelated topology nodes.

## Blueprint Requirements

Every production hub blueprint must identify:
- topology node ID and connected topology edges;
- incoming approach areas and outward route arms;
- orientation landmark;
- elevation bands and connectors;
- route cues for each major exit;
- terrain that meaningfully affects movement or sightlines;
- tactical control zones, if any;
- optional side/reward space, if any;
- active visual profile and any scene-specific overrides;
- which portions are visual preview only versus actual traversable route.

Candidate blueprints may use provisional geographic names, but topology bindings must use stable node IDs.
