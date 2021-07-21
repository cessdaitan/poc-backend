## Project overview
---
This project contains the backend code needed to perform CRUD operations for an Address Book.
## Technologies

This service runs on [Node.js](https://nodejs.org/en/) version `14.0.0`.

## Architecture
---
The proposed architecture for this service is based on [CLEAN](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

### Layers
We have main 4 layers: context, data, domain and infra described below.

#### Context
This layer is responsible for handling http/http interaction logic. Everything related to routes, middlewares, controllers and request/response must be here.

#### Data
Data layer holds all files responsible of data transportation. That means all repositories must stand here, interacting with database, external APIs (via clients), etc. If you need to save or fetch data this is the correct layer.

#### Domain
Here is where our business rules must stand. We utilize use-cases to handle logic and layer interaction. Context layer can see the Data layer and inject the use-cases in the controllers. No other layer can hold business logic.

#### Infra
This layer holds everything related to service infra. All main dependencies must go here like database libraries and models.  

### Project definition
Every layer has their own content module to operate. That means everything needed for the layer to work is defined in a specific folder. We defined three main folders to achieve that: types, protocols and helpers.

1. types: classes to transform data. Must not contain functions or logic. They are used only to define the data types needed to traffic data across the application.
2. protocols: our contracts (or interfaces) used to define function return types and object data definition.
3. helpers: files with helper functions, regarding each context. 


### Run locally

You need to have a Postgres running on your local machine (it can be docker based).

## Intall dependencies, build and run

1. Install the dependencies running: `npm i`
2. Copy the `.env.example` file to the following file: `.env`
3. Make any adjustment necessary on `.env` file to match your local Postgres database
4. Run the database migrations scripts: `npm db:migrate` ou `npx sequelize-cli db:migrate --env=database`
5. Build the application: `npm build` ou `tsc --build`
6. Start the application: `npm start` ou `node ./dist/app.js`
