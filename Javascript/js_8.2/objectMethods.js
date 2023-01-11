const myCountry = {
  country: "Portugal",
  capital: "Lisbon",
  language: "Portuguese",
  population: 10330000,
  neighbors: ["Spain"],
  describe: function () {
    return `${this.country} has 6 million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}`;
  },
  isIsland: function () {
    return this.neighbors.length === 0 ? true : false;
  },
};

console.log(myCountry.describe());
console.log(myCountry.isIsland())