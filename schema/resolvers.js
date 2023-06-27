const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    // This is where you read from a database
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const user = UserList.find((u) => u.id === Math.floor(args.id));
      return user;
    },

    //
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      console.log(args.name);
      return MovieList.find((m) => m.name === args.name);
    },
  },
  Mutation: {
    // This is where you would write to a database
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    UpdateUser: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Math.floor(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
  },
};

module.exports = { resolvers };
