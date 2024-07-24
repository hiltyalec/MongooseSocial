//IMPORT MODELS AND CONNECTION FROM CONNECTION.JS
const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

//SEED DATA FOR USERS AND THOUGHTS
const users = [
  {
    username: "cynthiamory",
    email: "cynthiamory@gmail.com",
    thought: [],
  },
];

//CONSOLE LOGS CONNECTION TO TERMINAL FOR DEBUGGING
console.log(connection);

//CONNECT TO MONGOOSE DATABASE AND DROP EXISTING DATABASE
connection.once("open", async () => {
  console.log("connected");

  //DROPS EXISTING DATABASE AND RECREATES IT
  await User.deleteMany({});

  //ADDS USERS TO DATABASE AND CREATES VARIABLE FOR USERS TO BE ADDED TO DATABASE
  await User.collection.insertMany(users);

  //CONSOLE LOGS USERS TO TERMINAL
  console.table(users);
  console.info("Database seeded!");
  process.exit(0);
});