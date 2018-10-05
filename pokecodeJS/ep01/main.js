
const fs = require('fs')

function main(filename) {
  const json = fs.readFileSync(filename, 'utf-8')
  const output = json.replace (/\n/g,'')
  console.log(`Reading new json data information >> ${output}`);
}

main(process.argv[2])
