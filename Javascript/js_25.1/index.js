const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

/* 1. this code doesn't return line 13 which is wrong. this reason is that the function whoIsStronger isn't bind to getStrength */
/*2. solution: use bind */
/*The code works because bind creates a new function with hero as its this value, and that function is passed as an argument to the whoIsStronger function.

Since whoIsStronger is being passed the newly created function bound, it invokes that function instead of the original hero.getStrength function. This means that the this value inside the getStrength function is now set to hero, as intended.

By using bind, we have effectively solved the issue of the incorrect this value inside the getStrength function when it's invoked inside the whoIsStronger function. The whoIsStronger function can now correctly determine if the strength of hero is greater than or less than its own strength, and return the appropriate string. */

const bound = hero.getStrength.bind(hero);
console.log(whoIsStronger(bound));
