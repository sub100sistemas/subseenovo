# LESSONS - auto-maintained by scripts/lessons.py

> Machine-owned. Do NOT hand-edit. Changes are overwritten on the next `lessons.py` write.
> Canonical state lives in `.specs/lessons.json`. Edit lessons only via the script.
> promote_threshold=2 distinct features · window_days=45 · quarantine_threshold=2

## Confirmed (load these at Specify/Design)

Corroborated across multiple features. Safe to apply as guidance.

_none_

## Candidates (under observation - do NOT load as guidance yet)

Seen once or not yet corroborated. Tracked, not trusted.

### L-001 - When the Figma node contains more elements than the spec's acceptance criterion enumerates, implement the node and record the deviation in spec.md's traceability row, not only in tasks.md.
- signal: `spec_precision_gap` · recurrence: 1 feature(s) · scope: `spec,figma` · harmful: 0
- features: crm-imobiliario-urbano
- evidence: URB-09 (spec.md P2 AC6; CrmUrbanoPortalIntegrations.vue:45-52; FIGMA_CONTENT_MANIFEST_CRM_URBANO.md:392) (spec,figma)
- last seen: 2026-09-09T17:09:30Z

### L-002 - Scope any equal-height, side-by-side or multi-column layout acceptance criterion to the breakpoint where that layout applies, since stacked mobile variants size to content.
- signal: `spec_precision_gap` · recurrence: 1 feature(s) · scope: `spec,responsive` · harmful: 0
- features: crm-imobiliario-urbano
- evidence: URB-11 (spec.md P3 AC1; CrmUrbanoTestimonials.vue:34,:69) (spec,responsive)
- last seen: 2026-09-09T17:09:30Z

### L-003 - Query every repeated sub-card of a Figma section as its own node and check it against a screenshot, because a bulk fetch of the parent returns one shared asset for all of them and hides leftover assets from reused component instances.
- signal: `ac_gap` · recurrence: 1 feature(s) · scope: `figma,content-extraction` · harmful: 0
- features: crm-imobiliario-urbano
- evidence: FIGMA_CONTENT_MANIFEST_CRM_URBANO.md:501 (URB-11 testimonial logos; same class already recorded in FIGMA_CONTENT_MANIFEST_CRM.md section 7) (figma,content-extraction)
- last seen: 2026-09-09T17:09:41Z

### L-004 - Download Figma image fills and isolated nodes via download_assets and export only the exact leaf node, because get_design_context asset URLs and parent-group exports return blank or artifact-laden files.
- signal: `ac_gap` · recurrence: 1 feature(s) · scope: `figma,assets` · harmful: 0
- features: crm-imobiliario-urbano
- evidence: FIGMA_CONTENT_MANIFEST_CRM_URBANO.md:110,:147 (URB-02 hero photo, URB-04 technology star) (figma,assets)
- last seen: 2026-09-09T17:09:41Z

### L-005 - Point a sibling-module link at the route that actually exists on disk rather than the placeholder named in the spec, and record the substitution in the traceability table.
- signal: `spec_deviation` · recurrence: 1 feature(s) · scope: `routes` · harmful: 0
- features: crm-imobiliario-urbano
- evidence: URB-12 (CrmUrbanoOtherModules.vue:34; spec.md route deviation note) (routes)
- last seen: 2026-09-09T17:09:41Z

## Quarantined (failed when applied - ignore)

A confirmed lesson that recurred alongside failure. Kept for the maintainer to review.

_none_
