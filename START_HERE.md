# START_HERE.md (delete after setup)

1. Create a new repo folder and unzip this pack into its root (keep the folder structure).
2. `git init`, then commit the pack as the first commit.
3. Install skills once in Claude Code:
   - `npx skills add anthropics/skills --skill frontend-design`
   - webapp-testing from the same repo (same command pattern: `--skill webapp-testing`; check the repo if the name differs)
   - Impeccable: install from github.com/pbakaus/impeccable following its README (optional, used in Stage 3)
   - `/security-review` is built in, nothing to install
4. Open the folder in your agent. Paste the Stage 1 prompt from `docs/PROMPTS.md`.
5. Approve each stage before the next prompt. Agents update `HANDOFF.md` so you can switch agents any time with the Resume prompt.
6. Optional: delete `reference/stitch/*/code.html` once Stage 2 is approved, to keep the repo light.
