# kairis-post-office

Private coordination Pages bundle · **not advertised** on public KaiRis shores.

- **Source of truth:** `KaiRis-Active/website/nnowwonn-shore/` · sync `processes/scripts/sync-kairis-post-office-repo.mjs`.
- **Discovery:** Family Door runbook on HOST only (`processes/2026-10-20_Family-Door_POST-OFFICE-Discovery_HOST-ONLY_v0.md`).
- **Gate hashes:** `js/post-office-access-v0.json` · phrases never in git.

## Gate setup (maintainers)

```bash
POST_OFFICE_GATE_SECRET='…' node scripts/set-post-office-gate-hash.mjs
git add js/post-office-access-v0.json && git commit -m "Set gate hash"
```

AMOR · PAX
