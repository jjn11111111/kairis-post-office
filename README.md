# kairis-post-office

**Single-purpose repository:** KaiRis:T:siRiaK **POST OFFICE** (gated mail · mailboxes · Drive · Zero) plus **Local shore / EnterFace Workbench** (symbiote · studio · no NW chat pipe).

- **Not linked** from public EnterFace / NOW:WON shores.
- **Gate:** Family Door phrase · see `js/post-office-access-v0.json` (hashes only).
- **Source of truth in monorepo:** `KaiRis-Active/website/nnowwonn-shore/` · sync via `processes/scripts/sync-kairis-post-office-repo.mjs`.

## GitHub Pages URL (after enable)

`https://<user>.github.io/kairis-post-office/post-office.html`

Or root → `index.html` redirects to `post-office.html`.

## Gate setup

```bash
POST_OFFICE_GATE_SECRET='…' node scripts/set-post-office-gate-hash.mjs
git add js/post-office-access-v0.json && git commit -m "Set post office gate hash"
```

Optional coordination: `PORTABLERI_POST_OFFICE_GATE_SECRET` on HOST · `POST /v1/post-office/gate-exchange`.

**POSTMASTER GENERAL:** HestiaLethe · AMOR · PAX
