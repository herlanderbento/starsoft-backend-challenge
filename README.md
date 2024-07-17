<center>
  <p align="center">
    <img src="https://nestjs.com/img/logo-small.svg" alt="Nest Logo" width="150" />
  </p>  
  <h1 align="center">🚀  CRUD - Film catalog</h1>
  <p>starsoft backend challenge</p>
</center>
<br />


## FRs (Functional Requirements)

- [x] It should be possible to authenticate with JWT;
- [x] It should be possible to build a CRUD of a movie catalog.

## BRs (Business Rules)
- [x] All the endpoints of this CRUD should only be consumed by an authenticated user.

## RTs (required tools)

- [x] TypeScript;
- [x] Nest.js;
- [x] TypeORM;
- [x] Swagger;
- [x] Docker;
- [ ] Redis;
- [x] PostgreSQL.


## How to execute?

- Just clone the Repository:

```sh
git clone https://github.com/star-soft/starsoft-backend-challenge.git
```

### Installation

```bash
npm install
```


```sh
docker-compose up -d
```

### Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev
```

### Address

- `http://localhost:3000`

- `[GET]/api` documentation

#### Authenticated user credentials:

```bash
{
  "username": "herlanderbento",
  "password": "herlanderbento"
}
```
