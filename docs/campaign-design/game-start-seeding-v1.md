# The Ashen Gauntlet: Game Start Seeding V1

Status: Reusable campaign-run setup canon.

## Purpose

This document defines deterministic contestant insertion placement without altering the accepted volcano topology. Player build, class, species, movement abilities, preferred playstyle, desired rival, and gem color are never inputs.

Starting gem assignment is a separate operation and is not part of this model.

## Player-start candidate set

The accepted topology simulation establishes JR-A, JR-B, JR-C, and JR-F as neutral player-start territories: each has three ordinary macro-route families, no required exceptional shortcut, and reliable insertion-to-threshold distance within the accepted 11-12 transition range.

All insertion anchors in those four territories form the player-start candidate set. Anchors are sorted lexically.

For seed `S`, calculate SHA-256 over UTF-8 text `S|player|ANCHOR` for every candidate. The anchor with the lexically smallest hexadecimal digest is selected.

This is deterministic and independent of party construction.

## Rival placement search

After removing the player anchor, sort the remaining 24 anchors lexically. Rival slots A-X are assigned by a fixed deterministic search over nonces 0 through 49,999.

For each nonce `N`, sort A-X by the hexadecimal SHA-256 digest of `S|rivals|N|TEAM`, then pair that order with the sorted remaining anchors.
A candidate is rejected if it violates any hard placement rule: territory capacities; more than one Overmatch rival in a territory; any Overmatch rival in the player's territory; no Peer-or-better rival in a territory; no Peer-or-weaker/specialist rival in a territory; more than two primary rivals in one territory; Third Bell Company and the returning survivor together; Copper Company and the seven-member company together; or both full Overmatch caster/summoner entries together.

Surviving candidates receive a soft score. Lower is better. The score penalizes threat imbalance between territories, excessive clustering of strong magic or extreme mobility, terrain mismatch against the contestant-field matrix, large companies in especially awkward cliff territories, and an exposed long-range specialist sharing the player's feeder.

Terrain suitability is deliberately soft rather than mandatory. This permits some contestants to receive awkward starts and prevents the process from becoming an optimization draft.

The valid candidate with the lowest score across all 50,000 nonces wins. Ties are broken by the lower nonce.

## Encounter spheres

Initial local encounter sphere means the other teams in the same Jungle Ring territory. This matches the accepted topology's early-dispersal model.

The narrower feeder sphere means teams whose insertion anchors feed into the same O1/O2 traversal node. It identifies the most immediate geographic proximity but does not script an encounter.

Neither sphere predicts movement, alliance, injury, death, or actual contact.

## Reproducibility

The model uses only UTF-8 SHA-256, lexical sorting, fixed nonce bounds, fixed scoring rules, and canonical contestant/topology inputs. A later implementation in any language should therefore reproduce a recorded run without relying on runtime-specific pseudorandom state.

Run-specific results belong under `campaign/runs/`. General topology files remain unchanged.