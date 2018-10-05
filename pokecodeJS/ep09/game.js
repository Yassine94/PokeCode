const fs = require('fs')
const Trainer = require('./trainer')
const PokemonFactory = require ('./pokemonFactory')


class Game {

  constructor(dump_on_file = false, to_save = false){
      this.dump_on_file = dump_on_file
      this.to_save = to_save
      this.pokestory = 'pokestory.json'
    }

    init(filename){

      if (fs.existsSync(this.pokestory)){
        const data = fs.readFileSync(this.pokestory, 'utf-8')
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
}

module.exports = Game
