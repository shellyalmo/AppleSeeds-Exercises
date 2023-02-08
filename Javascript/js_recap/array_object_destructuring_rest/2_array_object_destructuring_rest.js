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
      {
        id: 6,
        name: "Sam Brown",
        age: 32,
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

// Example
// Get the street and city from the address object of the last 2 people
const [, ...lastTwoPeople] = data;
// console.log(lastTwoPeople);
const [firstPerson, secondPerson] = lastTwoPeople;
// console.log(firstPerson);
// const [
//   {
//     address: { street, city },
//   },
//   {
//     address: { street: street1, city: city1 },
//   },
// ] = lastTwoPeople;

// console.log(street, city, street1, city1);

// ARRAY DESTRUCTURING

// Exercise 1: Use array destructuring to get the first two hobbies of the first person in the data array
const [first, ...others] = data;
// console.log(first);
const { hobbies } = first;
// console.log(hobbies);
const [firstHobbies, secondHobby, ...otherHobbies] = hobbies;
// console.log(firstHobbies, secondHobby);

// Exercise 2: Use array destructuring to get the first and third friend of the second person in the data array
const [firstGuy, second, third] = data;
// console.log(first);
// const { friends } = second;
// console.log(hobbies);
// const [firstFriend, secondFriend, thirdFriend] = friends;
// console.log(firstFriend, thirdFriend);

// OBJECT DESTRUCTURING

// Exercise 1: Use object destructuring to get the name, age, and city of the third person in the data array
// const [person1, person2, person3] = data;
// const {
//   name,
//   age,
//   address: { city },
// } = person3;

// console.log(name, age, city);
// Exercise 2: Use object destructuring to get the name and age of the first friend of the third person in the data array
const [person1, person2, person3] = data;
const { friends } = person3;
const [friend1, friend2] = friends;
const { name, age } = friend1;
console.log(name, age);

// THE REST OPERATOR

// Exercise 1: Put the last two objects from the data array in a new array

// Exercise 2: Put the last friend of the first person in a new array
