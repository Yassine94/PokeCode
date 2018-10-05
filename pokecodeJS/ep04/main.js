const fs = require('fs')
const Trainer = require('./trainer')
const Pokemon = require ('./pokemon')
const PokemonFactory = require ('./pokemonFactory')

function main(filename) {

  const data = fs.readFileSync(filename, 'utf-8')
  const output = data.replace (/\n/g,'')
  console.log(`Reading new json data information >> ${output}`)

  const json = JSON.parse(data)

  let trainer = new Trainer(json.firstname, json.age)
  trainer.hey()

  let salameche = PokemonFactory.create("Salamèche")
  salameche.yell()
}

main(process.argv[2])
