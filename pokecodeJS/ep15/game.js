const fs = require('fs')
const Trainer = require('./trainer')
const PokemonFactory = require ('./pokemonFactory')


class Game {

  constructor(dump_on_file = false, to_save = false){
      this.dump_on_file = dump_on_file
      this.to_save = to_save
      this.pokestory = 'pokestory.json'
      this.trainers = []
      this.pokemons_starters = ["Carapuce", "Bulbizarre", "Salamèche"]
    }

    init(filename){

      if (fs.existsSync(this.pokestory)){
        const data = fs.readFileSync(this.pokestory, 'utf-8')
        const json = JSON.parse(data)


        for (let item of json.trainers ){
          let trainer = new Trainer(item.firstname, item.age)
          let pokemons = []
            for (let numberPokemon of item.pokemons){
              const pokemon = PokemonFactory.create({
                 key: "ndex",
                 value: numberPokemon
               },numberPokemon.level);
              // pokemon.dump();
               pokemons.push(pokemon)
              }
               trainer.setPokemons(pokemons);
               trainer.list()
               this.trainers.push(trainer)
            }
        }
    else {

    const data = fs.readFileSync(filename, 'utf-8')
    const output = data.replace (/\n/g,'')
    console.log(`Reading new json data information >> ${output}`)

    const json = JSON.parse(data)

    for (let person of json){
      let trainer = new Trainer(person.firstname, person.age)
      let starter = []
      for (let pokemonName of this.pokemons_starters){
          starter.push(PokemonFactory.create({
             key: "nom",
             value: pokemonName
           })) ;
    }

    let lenStarter = starter.length
    let random = starter[[Math.floor(Math.random() * lenStarter)]]

    trainer.start(random)
    this.pokemons_starters.splice(starter.indexOf(random),1)

    let pokemons = trainer.getPokemons()
    for (let i = 0; i < 5; i++){
      pokemons.push(PokemonFactory.create());
    }
      trainer.list()
      trainer.setPokemons(pokemons)
      this.trainers.push(trainer)
      console.log(trainer);
      }
    }
  }

  serialize(){
    let data = {trainers:[]};
    for (const t of this.trainers){
      let pokemons = [];
      for (const p of t.getPokemons()) {
        pokemons.push(p.number)
      }
      data.trainers.push({
        id: t.id,
        firstname: t.firstname,
        age: t.age,
        pokemons,
        startDate: t.startDate
      });
    }
    // for (const p of t.getPokemons() ){
    //   pokemons.push({
    //     number: p.number,
    //     level: p.level
    //   });
    //   data.trainers.push()
    // }
    // let data = {
    //   trainers: [
    //     {
    //       id: trainer.id,
    //       firstname: trainer.firstname,
    //       age: trainer.age,
    //       pokemons,
    //       startDate: trainer.startDate
    //     }
    //   ]
    // };
    fs.writeFileSync("pokestory.json", JSON.stringify(data,null,3));
  }

  start(){
    this.serialize();


    console.log("0 : Poké Action");
    console.log("1 : Poké Fight");
    console.log("2 : Poké Swap");

    //format d'entrée
    process.stdin.setEncoding("ascii");

    process.stdin.on('data', (chunk) => {
    console.log(`You write ${chunk}`);
    if (chunk == 0) {
      console.log("0 : Poké Action");
      this.trainers[0].getPokemons()[0].action()
    }
    else if (chunk == 1) {
      console.log("1 : Poké Fight");
      // tableau des dresseurs
      let arrayDresseur = this.trainers
      // tableau des match
      let battleArray = []
      //let arrayPokemon = this.trainers.getPokemons()
      //On boucle pour chaque dresseur du tableau de dresseurs on récupère les pokemons liés
      for (var i = 0; i < arrayDresseur.length; i++) {
        battleArray[i] = new Array();
        // On stock le dresseur en cours
        let currentDresseur = arrayDresseur[i]
        //Ainsi que ses pokemons
        let currentPokemon = currentDresseur.getPokemons()[0]
          battleArray[i][0] = currentDresseur ;
          console.log(battleArray);
      }





    }
    else if (chunk == 2) {
      console.log("2 : Poké Swap");
    }

    });

    process.stdin.on("end", () => {
    console.log("The game is ended");
     });
  }
}

module.exports = Game
