// cross-platform build script for null0 carts

import { mkdir, copyFile, glob } from 'node:fs/promises'
import { createWriteStream, createReadStream } from 'node:fs'
import AdmZip from 'adm-zip'

try{
  await mkdir('build')
}catch(e){}

await copyFile('main.wasm', 'build/main.wasm')

for await (const f of glob('src/**/*')) {
  await copyFile(f, f.replace(/^src/, 'build'))
}

const zip = new AdmZip()
zip.addLocalFolder('build/', '')
zip.writeZip('webroot/mygame.null0')