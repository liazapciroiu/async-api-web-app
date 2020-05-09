// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
// configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// CORS for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('client-side'));

const port = 3000;
// Spin up the server
const server = app.listen(port, listening);
// Callback to debug
function listening() {
  console.log(`server running on localhost: ${port}`);
}

// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData(request, response) {
  response.send(projectData);
}

// Post Route
app.post('/', addData);

const data = [];
projectData = { data };

// Post callback
function addData(request, response) {
  newEntry = {
    date: request.body.date,
    temp: request.body.temp,
    desc: request.body.desc,
    feelings: request.body.feelings
  }
  data.push(newEntry);
}
