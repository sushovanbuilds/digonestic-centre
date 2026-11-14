# PROMPTS.md

Paste one prompt into any agent (Claude Code, Codex, opencode, Copilot, Antigravity). Each agent reads AGENTS.md and HANDOFF.md first.

## Stage 1
Read AGENTS.md and HANDOFF.md. Do Stage 1 from docs/PLAN.md only: scaffold Astro static with React, create the file tree, write types.ts and centre.ts from docs/CONFIG_SPEC.md with placeholders. Surgical edits, no extra deps. Run build, report pass/fail in 8 lines, update HANDOFF.md, then stop.

## Stage 2
Read AGENTS.md, HANDOFF.md, DESIGN.md sections 2 to 5, docs/STITCH_MAP.md. Do Stage 2: build all sections from config, wire WhatsApp links, honour both flags, apply the Strip list. Open only the Stitch screens you need. Run all Quality gates from AGENTS.md, update HANDOFF.md, stop.

## Stage 3
Do Stage 3 from docs/PLAN.md. First run the Impeccable audit and list findings only; apply just the ones inside DESIGN.md. Patch only what fails the checks. Test 390px and 320px, keyboard, reduced motion. Report a short pass/fail list, update HANDOFF.md, stop.

## Stage 4
Do Stage 4. Measure Lighthouse mobile and JS size. If under 95 or over budget, switch to the CSS fallback in DESIGN.md section 6 for the failing effect. Add meta, one H1, config-driven JSON-LD behind emitSchema. Confirm noindex and robots.txt. Report numbers, update HANDOFF.md, stop.

## Stage 5
Do Stage 5. Deploy to an unlisted preview, confirm noindex on the live URL, write README (second-centre steps), a launch checklist, and a 5-line phone demo script. Stop.

## Resume (any new session or new agent)
Read HANDOFF.md and AGENTS.md. Tell me the current stage and next action in 3 lines. Wait for my go.

## Swap to a second centre
Copy src/config/centre.ts, replace values only, keep flags decisions, rebuild, check nothing else changed.
