

const Pokemon = require ('./pokemon')
const pokedex = require('../data/pokedex.json')

class PokemonFactory {

  static create({key, value}){

    const pokemon = pokedex.find(function(item){      // pokedex.find((item) => {}
      return item[key] == value
    });
    let i = 1;
    let type = []
    while (pokemon[`type${i}`] != undefined){
      type.push(pokemon [`type${i++}`])
    }

  let pokedata = {
    number: pokemon.ndex,
    name: pokemon.nom,
    size: pokemon.taille,
    weight: pokemon.poids,
    type
  };

  return new Pokemon(pokedata, false)
  }
}

module.exports = PokemonFactory
