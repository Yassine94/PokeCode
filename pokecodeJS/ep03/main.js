const fs = require('fs')
const Trainer = require('./trainer')
const Pokemon = require ('./pokemon')

function main(filename) {
  const data = fs.readFileSync(filename, 'utf-8')
  const output = data.replace (/\n/g,'')
  console.log(`Reading new json data information >> ${output}`)

  const json = JSON.parse(data)

  let trainer = new Trainer(json.firstname, json.age)
  trainer.hey()

  let pokemon = new Pokemon()
  pokemon.yell()
}

if (process.argv.length !=  3){
  console.log("Please enter a json entry")
  console.log("usage: node main.js <filename> ");
  process.exit(-1)
}
main(process.argv[2])
