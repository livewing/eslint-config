import { readFile, writeFile } from 'fs/promises';
import { promisify } from 'util';
import glob from 'glob';
import yaml from 'js-yaml';

const globAsync = promisify(glob);

(async () => {
  await Promise.all([
    ...(
      await globAsync('src/*.@(yaml|yml)')
    ).map(
      async filename =>
        await writeFile(
          filename.replace(/^src\/(.+)\.(ya?ml)$/, (_, a) => `${a}.js`),
          `'use strict';\nmodule.exports = ${JSON.stringify(
            yaml.load(await readFile(filename, 'utf-8'), {
              filename,
              json: true
            }),
            null,
            2
          )};\n`
        )
    )
  ]);
})();
