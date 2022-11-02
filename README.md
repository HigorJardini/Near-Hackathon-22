# Near (Hackathon 2022 - Unifacef)
<p align="center" width="100%">
    <img src="https://i.imgur.com/NyWpbM1.png">
</p>

## Index

- [Introduction](https://github.com/HigorJardini/Near-Hackathon-22#introduction)
  - [Basic Requirements](https://github.com/HigorJardini/Near-Hackathon-22#requirements)
  - [Frontend Prototype](https://github.com/HigorJardini/Near-Hackathon-22#frontend-prototype)
    - [Credits](https://github.com/HigorJardini/Near-Hackathon-22#credits)
    - [Web](https://github.com/HigorJardini/Near-Hackathon-22#web)
    - [Mobile](https://github.com/HigorJardini/Near-Hackathon-22#mobile)
  - [Application dependencies](https://github.com/HigorJardini/Near-Hackathon-22#application-dependencies)
  - [Build docker image](https://github.com/HigorJardini/Near-Hackathon-22#build-docker-image)
  - [Running migrations](https://github.com/HigorJardini/Near-Hackathon-22#running-migrations)
  - [Running development](https://github.com/HigorJardini/Near-Hackathon-22#running-development)
  - [Running build](https://github.com/HigorJardini/Near-Hackathon-22#running-build)
- [Architecture](https://github.com/HigorJardini/Near-Hackathon-22#Architecture)
  - [Modules Folder](https://github.com/HigorJardini/Near-Hackathon-22#modules)
  - [Shared Folder](https://github.com/HigorJardini/Near-Hackathon-22#shared)
- [API](https://github.com/HigorJardini/Near-Hackathon-22#api-endpoints)


## Introduction

That application was developed for an challenge from Hackathon 2022. Using NodeJs + Express + Typescript
The Objective are create a api for a system of management accounting

- [NodeJs:18](https://nodejs.org/en/) - NodeJs
- [Typescript:4.4](https://www.typescriptlang.org/) - Typescript
- [Yarn:1](https://yarnpkg.com/) - Yarn OR [NPM:1](https://www.npmjs.com/) - NPM
- [PostgreSQL:14](https://www.postgresql.org/)
But you can run the application with docker
- [Docker](https://www.docker.com/) - Docker
- [Docker Compose](https://docs.docker.com/compose/) - Docker Compose

### Frontend Prototype

#### Credits:
- [Pedro Kruszynski](https://github.com/PedroKruszynski)
- [Eduardo](https://github.com/Eduardo681)
- [Lesliê](https://github.com/naushikah)

    
#### Web:

<p align="center" width="100%">
    <img src="https://i.imgur.com/oh6nwsm.png">
</p>

<p align="center" width="100%">
    <img src="https://i.imgur.com/fbfbEjJ.png">
</p>

- [Figma Project](https://www.figma.com/file/VCI9tOUoddZZp9k0plbJen/hackathon-contabil-web?node-id=106%3A134)

#### Mobile:

<p align="center" width="100%">
    <img src="https://i.imgur.com/Zj8Kloz.png">
</p>

<p align="center" width="100%">
    <img src="https://i.imgur.com/wejtw5r.png">
</p>

- [Figma Project](https://www.figma.com/file/YVFUXczqQ01x7Myw9xx39j/hackthon-contabil?node-id=0%3A1)


### Application dependencies

You have to copy the '.env.example' file and rename to '.env'

### Build docker image

After create the .env file you can run these following commands to build the image.

``` bash
# Build a images need for the app
docker-compose build

# Run all containers
docker-compose up -d

```

### Running migrations

Exist scripts in the project root to execute
I prefer yarn but you can choice either npm.

``` bash
# install typescript dependencies
$ yarn

# run all migration
$ yarn typeorm:migrations
```

### Running development

Exist scripts in the project root to execute
I prefer yarn but you can choice either npm.

``` bash
# install typescript dependencies
$ yarn

# run typescript server
$ yarn dev:server
```

### Running build

Exist scripts in the project root to execute the build and execute
I prefer yarn but you can choice either npm.

``` bash
# build the application
$ yarn build

# run node server
$ yarn start
```


## Architecture

### Modules

- Modules for each **domain** of api;

- Each module have a **DTO** telling what is the data of the function;

- **Infra** folder with the typeorm **Repositories** and **Entities**, a **http** folder containing the **Controller** and **Routes** of api;

- **Repository** folder tell the **interface** of the Repository and a **fake** of that repository;

- **Services** folder contain all services of the module and the **fake** of the same;

### Shared

- **Container** folder are for register all singleton for the app and have a **Providers** folder for each provider of the app, that provider has a  **fakes** folder, **implemenations** folder and **model** folder

- **Errors** are interfaces for define a default error of the api

- **Infra** folder are for the **Http** folder, that folde define all **Routes** and start the api server; also have a typeorm folder inside have a config folder for the configuration of the database, a **Migrations** folder the database execute


### Thank you! :)

For doubts email me `higorjardini07@gmail.com`.
