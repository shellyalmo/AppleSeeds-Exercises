async function getPerson(num) {
  try {
    let response = await fetch(`https://swapi.dev/api/people/${num}/`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getPlanet(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getPeople() {
  try {
    let people = await Promise.all(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(getPerson)
    );
    console.log(people);
    let planets = await Promise.all(
      people
        .map((person) => {
          return person.homeworld;
        })
        .map(getPlanet)
    );
    console.log(planets);
    people.forEach((person, index) => {
      const personRow = document.createElement("tr");
      personRow.innerHTML = `<td>${person.name}</td><td>${person.height}</td><td>${person.hair_color}</td><td>${planets[index].name}</td><td>${planets[index].population}</td>`;
      document.querySelector("tbody").appendChild(personRow);
    });
  } catch (error) {
    console.log(error);
  }
}

getPeople();
