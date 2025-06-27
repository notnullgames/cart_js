// cross-platform build script for null0 carts

const [,,name='mygame'] = process.argv

import { mkdir, copyFile } from 'node:fs/promises'
import { glob } from 'glob'
import { createWriteStream, createReadStream } from 'node:fs'
import AdmZip from 'adm-zip'

try{
  await mkdir('build')
}catch(e){}

await copyFile('main.wasm', 'build/main.wasm')

for (const f of await glob('src/**/*')) {
  await copyFile(f, f.replace(/^src/, 'build'))
}

const zip = new AdmZip()
zip.addLocalFolder('build/', '')
zip.writeZip(`webroot/${name}.null0`)