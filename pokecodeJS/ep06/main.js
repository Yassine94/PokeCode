const fs = require('fs')
const Trainer = require('./trainer')
const Pokemon = require ('./pokemon')
const PokemonFactory = require ('./pokemonFactory')
const save_game = require ('./game')
const fileJSON = 'pokestory.json'

function main(filename, is_save_file) {

  if (fs.existsSync(fileJSON)){

    const data = fs.readFileSync(fileJSON, 'utf-8')
    const json = JSON.parse(data)

    let trainers = []
    for (let item of json.trainers ){
      let trainer = new Trainer(item.firstname, item.age)
        for (let numberPokemon of item.pokemons){
          const pokemon = PokemonFactory.create({
             key: "ndex",
             value: numberPokemon
           });

          trainer.addPokemon(pokemon);
        }
        trainer.list()
        trainers.push(trainer)
      }
    }
  else {

  const data = fs.readFileSync(filename, 'utf-8')
  const output = data.replace (/\n/g,'')
  console.log(`Reading new json data information >> ${output}`)

  const json = JSON.parse(data)

  let sacha = new Trainer(json.firstname, json.age)
  let starter = []
    for (let pokemonName of ["Carapuce", "Bulbizarre", "Salamèche"]){
      starter.push(PokemonFactory.create({
         key: "nom",
         value: pokemonName
       })) ;
    }
  sacha.start(starter)
  sacha.serialize()
  }
}

if (process.argv.length < 3){
  console.log("Usage: node <filename> ");
  process.exit(-1);
}

const filename = process.argv[2]
const is_dump_on_file = process.argv[3] == '--log'
const save_game = process.argv[4] == '--save'
main(filename,is_dump_on_file)
