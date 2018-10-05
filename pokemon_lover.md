<p align="center">
  <img src="https://www.dropbox.com/s/rbvysb64jqgqfdx/pokecode.logo.png?raw=1" />
</p>

## <a name='TOC'>🦁 Summary</a>

- [Rules](#rules)
- [Overview](#overview)
- [Episode](#episode)
- [Credits](#credits)

## <a name='overview'>🐨 Overview</a>

The objective of the pokecode project is to learn advanced javascript features like object paradigm or 
new ES6 sexy features

## <a name='rules'>🐵 Rules</a>

Create a directory called `pokecode`, then there are 2 simple rules:

- You **have to** create directories for all episodes called `ep$X` [ with $x the episode number ]
- You **must** help others pokedev trainer when they are lost.

Please ask any question you have :)

## <a name='episode'>🐨 Episode</a>

### 01. Nice to meet you X

X is a young programmer that loved Pokémon, he decide to write a virtual program to help him being the 
best pokemon trainer of Internet.

Create a JSON file called `me.json` that contains your personal information:

```json
{
  "firstname": "Sacha",
  "age" : "18"
}
```

Write a function `main` that take a json filename as argument and which read the JSON file and display the following ouput:

```sh
~/pokecode ❯❯❯ node main.js me.json
Reading new json data information >> { "firstname" : "Sacha", "age" : "42" }
```

> You have to use `fs` node module to read the json file
> You have to use a specific JSON method to transform file content to a javascript object.

### 02. Like Sacha

You have to create a class called *Trainer* with the following attributes:
- `firstname:string`
- `age:string`
- `id:number`
- `pokemons:array`
- `startDate:Date`

When a *Trainer* is instantiate, the constructor is called with the `firstname` and the `age`. 

A static `id` is set and `pokemons` has to be an empty array. 

> The id start at 0 and has to be incremented when a trainer is create

The `startDate` has to be set with the current date in this format: `YYYY-MM-DD`. 

On trainer creation, the following input is display on stdout:

```sh
Here come's a new challenger ••[[ $id $firstname
```

> Replace $id and $firstname by the trainer one

```sh
~/pokecode ❯❯❯ node main.js me.json
...
Here comes a new challenger ••[[ 01 Sacha
```

Now that we have a trainer, he can introduce himself with a method hey that output :

```js
...
trainer.hey()
```

```sh
~/pokecode ❯❯❯ node main.js me.json
...
Yoooo!
I'm Sacha and I'm 42 years old.
I have 0 pokemon and I will be the best virtual pokemon master. 
```

> Be careful with pokemon plural ;)

### 03. Gotta code them all

You have to create a class `Pokemon` with the following attributes:
- `number:number`
- `name:string`
- `size:float`
- `weight:float`
- `type:array`
- `level:number`

> By default level is set to 3

The constructor take all attributes and output the name of the pokemon in uppercase.
The pokemon has also a method called `yell` that output his name in uppercase.

```sh
•••••• $pokemonName
```

> Replace $pokemonName by good one

This class is cool but how can we get pokemons informations? Who create pokemons by the way? ... Well, I will tell you a secret, there is a Pokemon factory! 

### 04. The factory

Create a class called `PokemonFactory` which have a single method called `create`.

This method take a single argument: the Pokemon `name` and then open the [`pokedex.json`](https://www.dropbox.com/s/fl4syarq311ae59/pokedex.json?dl=0) file, search the pokemon name entry and return a new Pokémon

```js
let pokemon = PokemonFactory.create("Salamèche")
pokemon.yell()
```

```sh
~/pokecode ❯❯❯ node main.js me.json
...
•••••• SALAMECHE
```

### 05. PokéDump

Add a `dump` method to your Pokémon to output all attributes data on stdout

```sh
~/pokecode ❯❯❯ node main.js me.json
...
•••••• #004 SALAMECHE 
size >> 0.6, weight >> 8.5, type >> [ 'Feu' ]
```

> Number has to be display with 3 digits

Now, add an optional argument on_file set as `false` by default to save a dump on a file `pokecode.$dateday.log`

> Replace $dateday by the date of the day `YYYY-MM-DD`

We will do that when the argument `--log` is passed to our script.

> Update your main function by adding a `dump_on_file` parameter set to true or false

```js
main(process.argv[2], dump_on_file)
```

```
```sh
~/pokecode ❯❯❯ node main.js me.json --save-log
...
•••••• #004 SALAMECHE 
size >> 0.6, weight >> 8.5, type >> [ 'Feu' ]

# The dump is successfully saved on file pokecode.2018-09-27.log
```

### 06. Let's start the adventure

In the main function, create an array of 3 pokemons:
- Bulbizarre
- Salamèche
- Carapuce

Add a parameter `is_yelling` set by default to false into the Pokemon constructor to allow pokémon yelling on creation.

Then, add a method `start` to the Trainer class which take the array of pokemon as parameter and add to the attributes `pokemons` a random one.

This method display the following output:

```sh
Yeaaaaaaah, my first pokémon is $pokemonName
•••••• $pokemonName
```

> Call the `yell` method of the choosen pokemon

### 07. Pokérialization

We want to serialize our pokécode to allow persistence to our adventure.
Add a method `serialize` to the Trainer class that save all trainer attributes into a json file called `pokestory.json`

```json
{
  "trainers": [
    {
      "id":1,
      "firstname": "Sacha",
      "age": "18",
      "pokemons": [
        007
      ],
      "startDate": "2018-09-27"
    }
  ]
}
```

### 08. DéPokérialization

Well... yeah you understand it :)
When running again your script, in the main file, check that a file called `pokestory.json` exist in our data directory
If yes, read data from this file and create all saved trainers. Otherwise, just create a trainer as we did on previous episode"

> When trainers are created from the `pokestory.json` file, Pokemon don't have to yell on instantiation ;)

### 09. Let's start

We are going to add a `Game` class.
On instantiation we can add a `to_save` parameter set by default to false which tell us to save every game action on a log file.

Add a method `init` which replace our main.
This method check if a backup exists and reload all data or create our resources.

Then add a method `start` that run our game. 
For now this method is empty but you have to add a way to let user interact with our game using stdin.

Create a menu with an action that allow us to create a trainer using the command line.

> Find how to play with stdin

### 10. Attack

Let's add attributes `attacks` to our pokémons to have some fun;
When a pokémon is create, we have to fill this array attributes with the data found on `pokedex.json`

You have to change
```json
{
  "niveau": "Départ",
  "nom": "Charge",
  "puissance": "35",
  "precision": "95",
  "pp": "35"
}
```

by 
```json
{
  "level": "Départ",
  "name": "Charge",
  "power": "35",
  "precision": "95",
  "pp": "35"
}
```

Then, transform `Depart` by `3`

### 11. Action

Add a method `action` to a pokemon;
This method choose randomly an action between the followings one:
- Display: `I'm sleeping`
- Display: `I'm playing`
- Display: `I'm level up from X to Y` by replacing `X` the current level by `Y` a new level that calculate randomly by adding 1, 2 or 3 to the current level.

> Be careful when level max 100 is reach, you have to display `I'm the best ${pokemonName} in Internet`

### 12. Loop

Well, let's code the `start` method;
This allow us to run a pokegame through what we call a game loop:

Before the loop, we have to create 2 trainers with 2 pokemons;
Rename the file `me.json` by `trainers.json` which contains an array of 2 trainers.

Then, for each trainers we have to fill their `pokemons` attributes with 5 others random pokémon.

### 13. Cleaning and saving

Let's clean some stuff:

1/ Move the creation of Pokémon: `['Carapuce', 'Bulbizarre', 'Salamèche']` from init to the Game constructor.
The objective is to create an attributes named `this.pokemon_starters` with theses 3 `Pokemon` objects.

2/ Update the `start` method from Trainer: it take a pokemon choose randomly from `this.pokemon_starters`
Don't forget to remove that pokemon to `this.pokemon_starters` array

3/ Move the serialize method from Pokemon to Game class.
Update the method to save all available Trainers attributes and then call this method inside the `start` method.

### 14. Some useful inheritance

### Person

A trainer is first of all a person;
Create a class Person that we can create with a `firstname` and an `age`
Now, add a `hi` method that display:

```js
Hello, my name is $firstname and I'm $age
```

Well, how to create a relation between `Person` and `Trainer` ?
Add the relation and remove the unnecessary code from `Trainer`

Then, remove the `console.log` that display `Here come's a new challenger...` and display the `hi` method output

### Animal

Yeaaah, I'm sorry but pokemons are animals!
Create a class Animal that we can create with `name`, `size` and `weight`
Now, add a `yell` method that display:

```js
•••••• $name is yelling:
```

Same that `Person`, find a way to create the relation and remove unnecessary code from `Pokemon`
Then, on calling `yell` from a Pokemon, you have to display:

```js
•••••• $pokemonName is yelling:
 ~~ pokemonName ~~
```

### 15. Let's play

Now, run your loop and display 3 actions to the user:
- Poké Action
- Poké Fight
- Poké Swap

#### Poké Action

This choice is about calling the `action` method for a random Pokémon

#### Poké Fight

This choice is about fighting with the other trainer.
Before that we have to add some attributes:
- `health` to a each pokemon with the value 420.
- `pp` to 1337.

Now on fight display: `${trainerName}::${pokemon1} VS ${trainerName}::${pokemon2}` which are 2 random pokemon choose from the 2 trainers.

Then, we have to create a round by round fight, choose randomly which pokémon is going to begin.

Well, now.. .FIGHT;
List the pokemon's trainer attacks available depending to his level and allow user to choose one.
Then, calculate a formula with the precision to know if the attack failed.

On failed, display `Sorry attack ${attackName} failed`
On succes, display `{pokemonName} attack with ${attackName}`

This is now the other pokemon to attack;

After each round, display all pokemons `health` and `pp`

When a trainer has no more pokémons, the game stopped and you have to display:
`Trainer ${firstname} is the best virtual trainer`

#### Poké Swap

This choice is about swapping a random Pokémon by a new one.

### 16. [NEXT] Customization and errors handling

## <a name='credits'>🦊 Credits</a>

Craft with :heart: by [**Majdi Toumi**](http://majditoumi.com)|[**Mhirba**](http://mhirba.com) in **Paris**.
