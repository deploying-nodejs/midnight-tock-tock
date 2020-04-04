# Midnight Tock Tock
This case study is a Nodejs application with just one functionality. It saves a list of endpoints, and every minute (or hour, or midnight), it makes a GET request to all saved endpoints. It saves the endpoints in a Redis database. Here's a [link to the project Git repository](https://github.com/deploying-nodejs/midnight-tock-tock).

## Project specifications
This is a server side rendered Node js application built on Express.

This application provides an interface with a simple input. It takes in a valid url and saves this url to a redis database. The `script.js` file in the project is a script that fetches all the saved urls from the database and makes a GET request to all of them. This application can serve as a health checker, that checks a given set of urls to see if they return a status of 200. To make this application periodically call the provided urls, we can setup a recurrent cron job that executes the `script.js` file. 

To correctly run this project, follow these instructions:

- Clone the project repository with the command `git clone https://github.com/deploying-nodejs/midnight-tock-tock.git`.
- Install the project dependencies with `yarn install`.
- Create a `.env` file to define environment variables. To see a sample of all variables required to run the project correctly, copy the example content from `.env.example` using the command `cp .env.example .env`. The example environment variables are:

```bash
REDIS_URL=
```

- The project requires redis to run properly. Configure the correct redis url in the environment file. If your application and your redis installation are running on the same server, the url can be `REDIS_URL=redis://localhost:6379`, connecting to `localhost` on the default port.
