require("dotenv").config() // ALWAYS NEEDED WHEN USING DOTENV

const express = require('express'); // bring in express into our project
const app = express(); /// creating an instance of an express app / server
const cors = require('cors'); // lets our frontend talk to the backend 
const mongoose = require('mongoose') // lets our code talk to / pull data from MongoDB

require('./config/travel.config');


// Middleware - changes SOMETHING about the req / res objects and / or cycle
app.use(express.json(), express.urlencoded({ extended: true })); 
// allows us to parse json out of reqs - urlencoded allows us to parse out and parse data into URLS. 
app.use(cors()); // just activating the code that allow our frontend to talk to the backend

const Routes = require('./routes/travel.routes');

Routes(app);



/// actually running the server and having it listen for our requests
app.listen(process.env.PORT , () => console.log(`Server is running on port ${process.env.PORT}`));