
const fs = require('fs')
const pokedex = require('./data/pokedex.json')
const Animal = require ('./animal')

class Pokemon extends Animal {

    constructor({number, name, size, weight, type, attacks, level = 3, health = 420, pp = 1337}, is_yelling) {

    super(name,weight,size)
    this.number = number
    this.level = level
    this.type = type
    this.attacks = attacks
    this.health = health
    this.pp = pp

    if(is_yelling !== false){
    this.yell()
    }
  }
  yell(){
    super.yell()
    console.log(`~~ ${this.name.toUpperCase()}`)
  }

  action(){

    let random = Math.floor(Math.random() * 3);
    let randomLevel = (Math.floor(Math.random() * 3)) + 1;

    switch(random){
      case 0: console.log("I'm sleeping");
      break;

      case 1: console.log("I'm playing");
      break;

      case 2: if (this.level + randomLevel >= 100){
                this.level = 100;
                console.log(`I'm the best ${this.name} in Internet`);
              }else{
                console.log(`I'm level up from ${this.level} to ${this.level + randomLevel}`)
                this.level = this.level + randomLevel
              }
              break;

      default:
      break;
            }
          }

  dump(is_on_file = false){
    let type_str = " [";
    for (const t of this.type){
      type_str += `'${t}'`;
      }
      type_str += " ]"

      let attack = " [";
      for (const currentAttack of this.attacks){
        attack += `'${currentAttack.name}'`;
        }
        attack += " ]"

    let output = `•••••• #${this.number} ${this.name.toUpperCase()}
    size >> ${this.size}, weight >> ${this.weight}, type >> ${type_str}, attack >> ${attack}`

    if (is_on_file){
      const d = new Date()
      let dateday = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`

      const logname = `pokecode.${dateday}.log`;
      fs.writeFileSync(logname, output,"utf-8");
      console.log(`# The  dump is successfully saved on file ${logname}`);
    }else {
      console.log(output);
    }
  }
}

module.exports = Pokemon
