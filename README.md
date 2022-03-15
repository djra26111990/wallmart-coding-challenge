## Description

Project to solve a coding challenge to Lider.cl making a frontend app with ReactJS/Vite & API REST with NestJS applying Hexagonal Architecture.

## MongoDB config

This challenge project has an .env config pointing to an MongoDB Atlas Cluster for the purpose of this coding test.
The MongoDB Database had the https://github.com/walmartdigital/products-db/blob/master/database/01-products.json file loaded and ready to use this data in this project as well. 

## Running the app

```bash
# clone the repo
$ git clone https://github.com/djra26111990/wallmart-coding-challenge.git

# go to the project directory
$ cd wallmart-coding-challenge

# start the app
$ docker-compose up

# stop the app
$ docker-compose stop

# remove the containers
$ docker-compose down
```

## Using the app
When the application is running, open your favorite browser and go to the following url: http://host.docker.internal/

This is an Docker special DNS config to access without the need of comunicate with containers using local ip address.
This project serve the react frontend project in a nginx container and serving the API using a reverse proxy
to comunicate with the API using the http://host.docker.internal/api/v1/products/

## Backend tests

```bash
# go to the project directory
$ cd backend-challenge-wallmart/

# install all dependencies
$ npm run install

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Frontend tests

```bash
# go to the project directory
$ cd frontend-challenge-wallmart/

# install all dependencies
$ npm run install

# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Stay in touch

- LinkedIn - [Daniel Rivas](https://www.linkedin.com/in/daniel-jos%C3%A9-rivas-aguilar/)
- GitHub - [https://github.com/djra26111990](https://github.com/djra26111990)
- Email - [Email](mailto://djra26111990@gmail.com)
- WhatsApp - [WhatsApp](https://api.whatsapp.com/send?phone=593959934473&text=Hola%2C%20Daniel!%20me%20gustaria%20estar%20en%20contacto%20contigo!)
