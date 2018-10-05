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
               pokemon.dump();
              trainer.addPokemon(pokemon);
            }

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
  start(){
    console.log("0 : Hello");
    console.log("1 : GoodBye");

    process.stdin.setEncoding("ascii");

    process.stdin.on('data', (chunk) => {
      console.log(`You write ${chunk}`);
    });
    process.stdin.on("end", () => {
      console.log("The game is ended");
    });
  }
}

module.exports = Game
