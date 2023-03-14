const { argv } = require("yargs");
const yargs = require("yargs");
const users = require("./users.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new user",
  builder: {
    // id: {
    //   describe: "user id",
    //   demandOption: true,
    //   type: "string",
    // },
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.addUser(argv.name, argv.email);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.removeUser(argv.id);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a user",
  handler: function () {
    console.log("Reading a user");
  },
});

// Create update command
yargs.command({
  command: "update",
  describe: "Update a user",
  handler: function (argv) {
    users.updateUser(argv.id, argv.name, argv.email);
  },
});

yargs.parse();
