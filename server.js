//IMPORT REQUIRED PACKAGES AND FILES HERE
const express =  require('express');
const db = require('./config/connection');
const routes = require('./routes');

// ENVIRONMENT VARIABLES AND PORT
const PORT = process.env.PORT || 3001;
const app = express();

//MIDDLEWARE TO PARSE INCOMING DATA HERE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//USE ROUTES FROM ROUTES.JS HERE
app.use(routes); 

//CONNECTO THE DATABASE AND START THE SERVER HERE FOR MONGODB
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });