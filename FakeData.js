const UserList = [
  {
    id: 1,
    name: "John",
    username: "dude",
    age: 20,
    height: 5.1,
    nationality: "CANADA",
    friends: [
      {
        name: "poppy",
        username: "bar",
        age: 29,
        height: 5.11,
        nationality: "CHILE",
      },
      {
        name: "jeff",
        username: "foo",
        age: 25,
        height: 5.4,
        nationality: "CANADA",
      },
    ],
  },
  {
    id: 2,
    name: "jan",
    username: "hey-now",
    age: 30,
    height: 5.6,
    nationality: "INDIA",
  },
  {
    id: 3,
    name: "jeff",
    username: "foo",
    age: 25,
    height: 5.4,
    nationality: "CANADA",
  },
  {
    id: 4,
    name: "poppy",
    username: "bar",
    age: 29,
    height: 5.11,
    nationality: "CHILE",
    friends: [
      {
        name: "jan",
        username: "hey-now",
        age: 30,
        height: 5.6,
        nationality: "INDIA",
      },
    ],
  },
  {
    id: 5,
    name: "greg",
    username: "fun-one",
    age: 43,
    height: 6.2,
    nationality: "GERMANY",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isIntheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isIntheaters: false,
  },
  {
    id: 3,
    name: "Lion King",
    yearOfPublication: 2027,
    isIntheaters: false,
  },
  {
    id: 4,
    name: "Blue Planet",
    yearOfPublication: 2023,
    isIntheaters: true,
  },
];

module.exports = { UserList, MovieList };
