const fs = require('fs')
const Trainer = require('./trainer')
const Pokemon = require ('./pokemon')
const PokemonFactory = require ('./pokemonFactory')

function main(filename, is_save_file) {

  if (fs.existsSync('pokestory.json')){

    const data = fs.readFileSync('pokestory.json', 'utf-8')
    const json = JSON.parse(data)

    for (let item of json.trainers){
      let dresseur = new Trainer(item.firstname, item.age)
      let starter = []
      for (let pokemonName of ["Carapuce", "Bulbizarre", "Salamèche"]){
          starter.push(PokemonFactory.create(pokemonName))
        }
      dresseur.start(starter)
      //console.log(dresseur);
  }
}
  else {

  const data = fs.readFileSync(filename, 'utf-8')
  const output = data.replace (/\n/g,'')
  console.log(`Reading new json data information >> ${output}`)

  const json = JSON.parse(data)

  let sacha = new Trainer(json.firstname, json.age)
  //trainer.hey()
  let starter = []
    for (let pokemonName of ["Carapuce", "Bulbizarre", "Salamèche"]){
      starter.push(PokemonFactory.create(pokemonName))
    }
  sacha.start(starter)
  sacha.serialize()
  }
}

if (process.argv.length < 3){
  console.log("Usage: node main.js <filename>");
  process.exit(-1);
}

// if (process.argv.length = 3){
//   console.log('debut');
//   console.log(process.argv.length[3]);
//   const name = process.argv.length[3];
//   console.log("new trainer : ", name);
//   console.log('fin');
// }

const filename = process.argv[2]
const is_dump_on_file = process.argv[3] == '--log'
main(filename,is_dump_on_file)
