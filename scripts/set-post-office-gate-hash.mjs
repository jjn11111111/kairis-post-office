#!/usr/bin/env node
/**
 * Write SHA-256 gate fingerprints into post-office-access-v0.json (never the plaintext secret).
 * Usage:
 *   POST_OFFICE_GATE_SECRET='…' node processes/scripts/set-post-office-gate-hash.mjs
 *   POST_OFFICE_STEWARD_GATE_SECRET='…' node processes/scripts/set-post-office-gate-hash.mjs
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ACCESS_PATH = join(ROOT, 'js/post-office-access-v0.json');

function sha256(text) {
  return createHash('sha256').update(String(text), 'utf8').digest('hex');
}

const host = process.env.POST_OFFICE_GATE_SECRET ?? process.env.PORTABLERI_POST_OFFICE_GATE_SECRET ?? '';
const steward = process.env.POST_OFFICE_STEWARD_GATE_SECRET ?? process.env.PORTABLERI_POST_OFFICE_STEWARD_SECRET ?? '';

if (!host && !steward) {
  console.error('Set POST_OFFICE_GATE_SECRET and/or POST_OFFICE_STEWARD_GATE_SECRET');
  process.exit(1);
}

const doc = JSON.parse(readFileSync(ACCESS_PATH, 'utf8'));
if (host) doc.gate_sha256 = sha256(host.trim());
if (steward) doc.steward_gate_sha256 = sha256(steward.trim());
doc.updated_at = new Date().toISOString().slice(0, 10);
writeFileSync(ACCESS_PATH, `${JSON.stringify(doc, null, 2)}\n`, 'utf8');
console.log('Updated', ACCESS_PATH);
console.log('host hash set:', Boolean(doc.gate_sha256), 'steward hash set:', Boolean(doc.steward_gate_sha256));
