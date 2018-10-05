

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

    let attacks = []
    for (let attack of pokemon.attaques){
      attacks.push({
        level : attack.niveau == "Départ" ? 3 : attack.niveau,
        name : attack.nom,
        power : attack.puissance,
        precision: attack.precision,
        pp: attack.pp
      })
    }
  let pokedata = {
    number: pokemon.ndex,
    name: pokemon.nom,
    size: pokemon.taille,
    weight: pokemon.poids,
    type,
    attacks
  };

  return new Pokemon(pokedata, false)
  }
}

module.exports = PokemonFactory
