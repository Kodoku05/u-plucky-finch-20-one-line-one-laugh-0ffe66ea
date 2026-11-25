import { mkdirSync, writeFileSync } from 'node:fs';

const line = "At my eviction, my landlord asked me to leave the boxes; he'd already listed them as studio apartments.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', line, 'utf8');
