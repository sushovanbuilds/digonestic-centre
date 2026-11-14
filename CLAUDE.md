@AGENTS.md
@HANDOFF.md

Claude Code extras (use if installed):
- Method: lean-build, surgical-patch, verify-and-stop, caveman for terse replies.
- Design stack, in this order of authority: DESIGN.md > frontend-design (execution and taste) > Impeccable (audit and polish, Stage 3 only, report before changing) > ui-ux-pro-max and 21st (gaps only). See AGENTS.md "Design skill precedence".
- Verification: webapp-testing (Playwright) for 390px and 320px checks, console errors, expand/collapse behaviour. Built-in `/security-review` at the end of Stages 2 and 4.
- claude-seo: Stage 4 only (MedicalClinic/DiagnosticLab schema, meta, headings). Keep noindex on.
- claude-mem handoff: end of each stage, mirror the result into HANDOFF.md.
- Do not read `reference/` wholesale. Use `docs/STITCH_MAP.md`.
