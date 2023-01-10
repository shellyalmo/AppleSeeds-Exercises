function countryToLiveIn(language, isIsland, population, country = "Japan") {
  const newLanguage = "Japanese";
  const newIsIsland = true;
  const newPopulation = 125700000;

  if (
    language === newLanguage &&
    isIsland === newIsIsland &&
    population === newPopulation
  ) {
    console.log(`You should live in ${country}.`);
  } else {
    console.log(`${country} does not meet your criteria.`);
  }
}

// results false
countryToLiveIn("English", false, 50000000);
//results true
countryToLiveIn("Japanese", true, 125700000);
