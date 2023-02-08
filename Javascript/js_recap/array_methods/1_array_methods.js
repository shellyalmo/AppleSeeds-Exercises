// @ts-nocheck
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001,
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25,
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001,
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30,
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28,
      },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001,
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30,
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32,
      },
    ],
  },
];

// FILTER

// Example:
// Using filter method, create a new array of objects containing only the people who live in California (state: "CA").
const peopleInCA = data.filter((person) => person.address.state === "CA");
// console.log(peopleInCA);

// Exercise 1: Use the filter method to get all the friends of John Doe
const john = data.filter((person) => person.name === "John Doe");
const johnFriends = john.map((obj) => obj.friends);
// console.log(johnFriends.flat());
// Exercise 2: Use the filter method to get all the people who live in New York
const newYorkers = data.filter((person) => person.address.state === "NY");
// console.log(newYorkers);
// Exercise 3: Use the filter method to get all the people who are older than 30
const old = data.filter((person) => person.age > 30);
// console.log(old);

// MAP

// Example:
// Using map method, create a new array of strings with the full addresses (street, city, state, zip) of each person.
const fullAddresses = data.map((person) => {
  const { street, city, state, zip } = person.address;
  return `${street}, ${city}, ${state} ${zip}`;
});
// console.log(fullAddresses);

// Exercise 1: Use the map method to put the names of all the friends of John Doe in a single array (use also the flat method)
const arrayJohnFriends = johnFriends.flat().map((friend) => {
  return ([friendName] = friend.name);
});
// console.log(arrayJohnFriends);

// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
const allAddresses = data.map((person) => person.address);
// console.log(allAddresses);

// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
const allHobbies = data.map((person) => person.hobbies).flat();
// console.log(allHobbies);

// FIND

// Example
// Using find method (and maybe some more methods), find the person with the name "Emily Davis".
const emily = data
  .map((person) => person.friends)
  .flat()
  .find((p) => p.name === "Emily Davis");
// console.log(emily);

// Exercise 1: Use the find method to find the first person who lives in Chicago
const chicagoPerson = data.find((person) => person.address.city === "Chicago");
// console.log(chicagoPerson);

// Exercise 2: Use the find method to find the first person who is older than 30
const firstOld = data.find((person) => person.age > 30);
// console.log(firstOld);
// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
const reader = data.find((person) =>
  person.hobbies.some((hobby) => hobby === "reading")
);
// console.log(reader);

// FOREACH

// Example
// Using forEach method, create a new object that has the names of all friends of each person as properties and their respective ages as values.
const friendsWithAges = {};
data.forEach((person) => {
  person.friends.forEach((friend) => {
    friendsWithAges[friend.name] = friend.age;
  });
});
// console.log(friendsWithAges);

// Exercise 1: Use the forEach method to print out the names of all the people in the data array
data.forEach((person) => {
  console.log(person.name);
});

// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
data.forEach((person) => {
  if (person.age > 18) {
    person["isAdult"] = true;
  } else {
    person["isAdult"] = false;
  }
});
// console.log(data);

// Exercise 3: Use the forEach method to print out the names of all the friends of each person
data.forEach((person) => {
  person.friends.forEach((friend) => {
    console.log(friend.name);
  });
});

// SOME

// Example
// Using some method, check if any person in the data array has the hobby "traveling".
const anyTravelers = data.some((person) =>
  person.hobbies.includes("traveling")
);
// console.log(anyTravelers);

// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
const anyCooks = data.some((person) => person.hobbies.includes("cooking"));
// console.log(anyCooks);

// Exercise 2: Use the some method to check if any of the people in the data array live in California
const anyCalifornians = data.some((person) => (person.address.state = "CA"));
// console.log(anyCalifornians);

// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30
const anyOldFriends = data.some((person) =>
  person.friends.some((friend) => friend.age > 30)
);
// console.log(anyOldFriends);

// EVERY

// Example:
// Using every method, check if all people in the data array have an age greater than 20.
const allAdults = data.every((person) => person.age > 20);
// console.log(allAdults);

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby
const allReaders = data.every((person) => person.hobbies.includes("reading"));
// console.log(allReaders);

// Exercise 2: Use the every method to check if all the people in the data array live in the same state
const states = ["NY", "CA", "IL"];
// states.forEach((state) => {
//   console.log(data.every((person) => person.address.state === state));
// });

// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25
const allOld = data.every((person) =>
  person.friends.every((friend) => friend.age > 25)
);
// console.log(allOld);

// REDUCE

// Example:
// Using reduce method, find the total age of all people in the data array.
// const totalAge = data.reduce((acc, person) => acc + person.age, 0);
// console.log(totalAge);

// Exercise 1: Use the reduce method to get the total age of all the people in the data array
const totalAges = data.reduce((acc, person) => acc + person.age, 0);
// console.log(totalAges);

// Exercise 2: Use the reduce method to get the number of people who live in each state
const howManyInState = data.reduce((acc, person) => {
  const state = person.address.state;
  if (acc[state] === undefined) {
    acc[state] = 1;
  } else {
    acc[state]++;
  }
  return acc;
}, {});
console.log(howManyInState);
// Exercise 3: Use the reduce method to get the average age of all the people in the data array
const agesArr = data.map((person) => person.age);
const avg = agesArr.reduce((acc, age) => acc + age, 0) / agesArr.length;
// console.log(avg);
// INCLUDES

// Example
// Using includes method, check if the name "Jane Smith" is in the data array.
const janeExists = data.map((person) => person.name).includes("Jane Smith");
// console.log(janeExists);

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"
const johnHobbies = data
  .filter((person) => person.name === "John Doe")
  .map((john) => john.hobbies.includes("gaming"));

// console.log(johnHobbies);

// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4
const jane = data.filter((person) => person.name === "Jane Smith");
const janeFriends = jane[0].friends.map((friend) => friend.id);
// console.log(janeFriends.includes(4));

// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"
const names = data.map((person) => person.name).includes("Emily Davis");
// console.log(names);
