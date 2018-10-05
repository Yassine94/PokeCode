class Trainer {
   constructor (firstname, age) {

     if ( typeof Trainer.counter == 'undefined') {
       Trainer.counter = 1
     }
     this.id = Trainer.counter++;           // attribut static
     this.firstname = firstname;
     this.age = age;
     this.pokemons = [];

     const d = new Date()
     this.startDate = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`

     console.log(`Here comes a new challenger ••[[ ${this.id} ${this.firstname}`)
   }

   hey() {
     const nbPokemon = this.pokemons.length
     console.log(`
       Yoooo!
       I'm ${this.firstname} and I'm ${this.age} years old.
       I have ${nbPokemon} pokemon${nbPokemon > 1 ? 's' : ''} and I will be the best virtual pokemon master.
       `);
   }
}

module.exports = Trainer
