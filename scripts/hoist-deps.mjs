import fs from 'fs';
import path from 'path';

const pnpmDir = 'node_modules/.pnpm';
const targetDir = 'node_modules';
let linked = 0;
let skipped = 0;
let errors = 0;

const entries = fs.readdirSync(pnpmDir, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isDirectory() || entry.name === 'lock.yaml' || entry.name.startsWith('_') || entry.name === 'node_modules') continue;

  const pkgNodeModules = path.join(pnpmDir, entry.name, 'node_modules');
  if (!fs.existsSync(pkgNodeModules)) continue;

  let pkgs;
  try {
    pkgs = fs.readdirSync(pkgNodeModules, { withFileTypes: true });
  } catch(e) { continue; }

  for (const pkg of pkgs) {
    const source = path.join(pkgNodeModules, pkg.name);

    if (pkg.name.startsWith('@')) {
      const scopeDir = path.join(targetDir, pkg.name);
      if (!fs.existsSync(scopeDir)) {
        try { fs.mkdirSync(scopeDir, { recursive: true }); } catch(e) {}
      }

      let scopedEntries;
      try {
        scopedEntries = fs.readdirSync(source, { withFileTypes: true });
      } catch(e) { continue; }

      for (const scopedPkg of scopedEntries) {
        const scopedSource = path.join(source, scopedPkg.name);
        const scopedTarget = path.join(scopeDir, scopedPkg.name);

        if (!fs.existsSync(scopedTarget)) {
          try {
            const rp = fs.realpathSync(scopedSource);
            fs.symlinkSync(rp, scopedTarget, 'dir');
            linked++;
          } catch(e) {
            errors++;
          }
        } else {
          skipped++;
        }
      }
    } else {
      const target = path.join(targetDir, pkg.name);
      if (!fs.existsSync(target)) {
        try {
          const rp = fs.realpathSync(source);
          fs.symlinkSync(rp, target, 'dir');
          linked++;
        } catch(e) {
          errors++;
        }
      } else {
        skipped++;
      }
    }
  }
}

console.log(`Linked: ${linked}, Skipped: ${skipped}, Errors: ${errors}`);
