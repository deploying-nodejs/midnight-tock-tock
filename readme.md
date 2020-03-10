# Midnight Tock Tock

## Getting started

To get the project running locally, 

- Clone this repository by running `git clone https://github.com/deploying-nodejs/midnight-tock-tock.git`
- Run `yarn` to install all project dependencies.
- Run `yarn dev` to start the development server.

This application requires Redis database to run properly.

## Code review

This project has two main files: 
- `index.js` - This runs an express application which servers the main page. On this page a user can add endpoints to be pinged.
- `script.js` - This is a script that fetches all the endpoints from the database, makes a get request to them, and prints the results.


### Dependencies
- [Express.js](https://expressjs.com) - The server for handling and routing HTTP requests
- [Redis](https://github.com/mjackson/then-redis) - This package helps connect to a local installation of Redis database. This script could be run as a cron job.

## Functionality overview

A user can:
  - Add an endpoint to the database using the input on the home page.
  - Run a script to make a GET request to all added endpoints.

## Start project in production
To start project in production, run `yarn start`
