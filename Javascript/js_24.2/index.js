function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

pikachu = new Pokemon("Pikachu", "electric", [
  "lightning",
  "thunder",
  "superElectric",
]);

squirtle = new Pokemon("Squirtle", "water", ["splash", "tsunami"]);

balbazor = new Pokemon("Balbazor", "grass", ["poison", "super strike"]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you ${this.name}`);
};

Pokemon.prototype.attack = function (attackNumber) {
  console.log(`${this.name} used ${this.attackList[attackNumber]}`);
};

pikachu.callPokemon();
pikachu.attack(0);
balbazor.callPokemon();
balbazor.attack(1);
squirtle.callPokemon();
squirtle.attack(1);
