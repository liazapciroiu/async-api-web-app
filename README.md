# async-api-web-app

This project was made as part of the Udacity [Front-end nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011). 
The objective was to better grasp concepts like async and working with APIs. So I made a local server, the enpoints for front-end and combined the data received from the user with those from the API to update the UI.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine. Clone the repo and see notes on prerequsities, installing dependencies and run the project.

### Prerequisites

You need to have [Node installed](https://nodejs.org/en/download/) on your machine.

### Installing dependencies

To get the development environment running install using npm the following:

* Framework for node.js - [Express](https://expressjs.com/):
```
npm install express
```
* Middleware - use pody-parser package:
```
npm install body-parser
```
* Cors package for cross origin allowance:
```
npm install cors
```
### Run the project

Run the following command to start the server:
```
node server.js
```

Navigate to localhost:3000, if you want to change the port go to server.js and change the const port value.

To test, please choose a zip from US (20001, 10009, 94040). (I am only sending the request to the weather API based on the zip code, so it defaults to only US).

## Built With
* HTML, CSS, JavaScript - front-end
* [Node](https://nodejs.org/en/) - back-end
* [Express](https://expressjs.com/) - node framework
* [OpenWeatherMap](https://openweathermap.org/api) - weather API
