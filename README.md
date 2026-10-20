# kairis-post-office

**Single-purpose repository:** KaiRis:T:siRiaK **POST OFFICE** only (gated mail · mailboxes · Drive boxes · Zero promulgation).

- **Not linked** from public EnterFace / NOW:WON shores.
- **Gate:** Family Door phrase · see `js/post-office-access-v0.json` (hashes only).
- **Source of truth in monorepo:** `KaiRis-Active/website/nnowwonn-shore/` · sync via `processes/scripts/sync-kairis-post-office-repo.mjs`.

## GitHub Pages URL

**https://jjn11111111.github.io/kairis-post-office/post-office.html**

Root `index.html` redirects to `post-office.html`.

## Gate setup

From **repo root** (not `~`):

```bash
cd ~/KaiRis-Active/kairis-post-office   # or your clone path
chmod +x set-gate-hash.sh
POST_OFFICE_GATE_SECRET='your-phrase' ./set-gate-hash.sh
git add js/post-office-access-v0.json && git commit -m "Set post office gate hash" && git push
```

Or full path to the script:

```bash
POST_OFFICE_GATE_SECRET='your-phrase' node ~/KaiRis-Active/kairis-post-office/scripts/set-post-office-gate-hash.mjs
```

Optional coordination: `PORTABLERI_POST_OFFICE_GATE_SECRET` on HOST · `POST /v1/post-office/gate-exchange`.

**POSTMASTER GENERAL:** HestiaLethe · **Weave steward (edit):** Bobby · Super Admin · GitHub collaborator on invite

## Visual maps (no gate)

- `tsiriak-nodes.html` — card directory  
- `tsiriak-solar-graft.html` — KaiRis:T:siRiaK sun · spoke line to each node  

**Electromagnetic weave:** optimize node relationships for efficiency, LOVE, and function — see `processes/2026-10-20_Promeo_Bobby_HTML-Resources_Electromagnetic-Weave_v0.md` in KaiRis-Active.

**POSTMASTER GENERAL:** HestiaLethe · AMOR · PAX
