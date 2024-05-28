import fs from 'fs';

const assetsPath='dist/hello-assets'

const stylesConcatedFile = `${assetsPath}/styles.css`
// const scriptsConcatedFile = `${assetsPath}/scripts.js`

// get list of js file in assetsPath
// const jsFiles = fs.readdirSync(assetsPath).filter(file => file.endsWith('.js'))
// list of css file in assetsPath
const cssFiles = fs.readdirSync(assetsPath).filter(file => file.endsWith('.css'))

// create the concated file for css, empty it first
fs.writeFileSync(stylesConcatedFile, '')
// append all css files to the concated file
cssFiles.forEach(file => {
  const readStream = fs.createReadStream(`${assetsPath}/${file}`);

  const writeStream = fs.createWriteStream(stylesConcatedFile, { flags: 'a' });
  readStream.on('close', () => {
    fs.unlinkSync(`${assetsPath}/${file}`)
  })

  readStream.on('end', () => {
    writeStream.write('\n')
  })
  readStream.pipe(writeStream);
})

// // create the concated file for js, empty it first
// fs.writeFileSync(scriptsConcatedFile, '')
// // append all js files to the concated file
// jsFiles.forEach(file => {
//   const readStream = fs.createReadStream(`${assetsPath}/${file}`);
//
//
//   const writeStream = fs.createWriteStream(scriptsConcatedFile, { flags: 'a' });
//   readStream.on('close', () => {
//     fs.unlinkSync(`${assetsPath}/${file}`)
//   })
//
//   readStream.on('end', () => {
//     writeStream.write('\n')
//   })
//   readStream.pipe(writeStream);
// })

