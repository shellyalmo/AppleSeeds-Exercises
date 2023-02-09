async function getPerson(num) {
  try {
    let response = await fetch(`https://swapi.dev/api/people/${num}/`);
    if (!response.ok) throw Error("slow connection");
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
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
      Array.from({ length: 10 }, (_, i) => i + 1).map(getPerson)
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
