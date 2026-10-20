#!/usr/bin/env bash
# Run from anywhere · writes js/post-office-access-v0.json (hash only).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "${ROOT}"

if [[ -z "${POST_OFFICE_GATE_SECRET:-}" && -z "${POST_OFFICE_STEWARD_GATE_SECRET:-}" && -z "${PORTABLERI_POST_OFFICE_GATE_SECRET:-}" ]]; then
  echo "Set POST_OFFICE_GATE_SECRET and/or POST_OFFICE_STEWARD_GATE_SECRET first." >&2
  exit 1
fi

node "${ROOT}/scripts/set-post-office-gate-hash.mjs"
echo "Next: cd ${ROOT} && git add js/post-office-access-v0.json && git commit -m 'Set post office gate hash' && git push"
