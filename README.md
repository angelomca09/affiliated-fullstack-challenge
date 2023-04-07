# Affiliated App - Fullstack Challenge

The objective is to help creator-affiliate relations in sales, creating an interface that receives input files and return sales data.

## Technologies

- **Backend:** NodeJS, TypeScript, JestJS

- **Frontend:** ReactJS (Vite), TypeScript, PicoCSS

- **DB:** Postgres

## How to run

You can run the project with docker or locally.

### Running on Docker

Considering you already have [Docker](https://docs.docker.com/get-docker/) installed on your machine, to run the docker container you will need use the commands bellow:

```bash
#to build the image (you can choose the <image_name>)

$ docker build -t <image_name> .


#to run the container

$ docker run -dp 3000:3000 <image_name>
```

With the container on, just acces http://localhost:3000 on any Browser.

### Running locally

To quickly install all dependencies in both projects (Node and React), use the script:

```bash
$ npm run install:all
```

With both dependencies installed, you can run the application using 'start' scripts:

```bash
#to run de API (NodeJS)

$ npm run start:dev
#server will run on http://localhost:3000


#to run de UI (ReactJS)

$ npm run start:UI
#interface will run on http://localhost:5173
```

## Testing

There are some tests coverage on the backend side. Test files are found at `src\tests`, and were made using JestJS.

## Solving the problem

To solve the main problem of receiving files, extract and save data from them, I broke the challenge into little pieces.

### File Upload

First, we need to upload the file. For that I used `FormData` from JS. That's a simple way to POST files to APIs. The `express-fileupload` middleware was used to make it possible to access the file sent via `req.files` from requisitions.

### File Parsing

With the file on hands, now it's time to parse de data. The solution here was to create a `service` so we could isolate the responsabilities of parsing files to it. For each line of the .txt file uploaded, our service maps it according to the table bellow.

| Field   | Start | End | Length | Description                |
| ------- | ----- | --- | ------ | -------------------------- |
| Type    | 1     | 1   | 1      | Transaction type           |
| Date    | 2     | 26  | 25     | Date - ISO Date + GMT      |
| Product | 27    | 56  | 30     | product Description        |
| Value   | 57    | 66  | 10     | Transaction value in cents |
| Seller  | 67    | 86  | 20     | Seller's name              |

### File Saving

File uploaded and parsed. Finally, now we save the data.
As stated before, the databank chosen was `Postgres`.
To use it within our application, the `Sequelize` ORM was put in action, so that it would be easier to save and retrieve that data latter.

## API Documentation

### Upload .txt File

```http
POST /api/fileupload
```

| Data     | Name  | Description                       |
| :------- | :---- | :-------------------------------- |
| FormData | `txt` | A buffered file sent via FormData |

### Return all sales

```http
GET /api/sales
```

This request returns a list of `ISale`:

```typescript
interface ISale {
  sale_id: number;
  date: string;
  product: string;
  seller: string;
  type: "1" | "2" | "3" | "4";
  value: number;
}
```

### Return a sale by `<sale_id>`

```http
GET /api/sale/<sale_id>
```

This request returns a object of the above type `ISale`.

### Sign In

```http
POST /api/auth/singIn
```

| Data | Name       | Description                                  |
| :--- | :--------- | :------------------------------------------- |
| Body | `username` | A string that represents the user's username |
| Body | `password` | A string that represents the user's password |

This request return a object of `ILogin`:

```typescript
interface ILogin {
  success: boolean;
  access?: "basic" | "admin";
  profile?: {
    username: string;
  };
  message?: string;
}
```

### Log In

```http
POST /api/auth/logIn
```

| Data | Name       | Description                                  |
| :--- | :--------- | :------------------------------------------- |
| Body | `username` | A string that represents the user's username |
| Body | `password` | A string that represents the user's password |

This request return a object of the above type `ILogin`.

## References

- [Node.js file upload example with Ajax and JavaScript](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/JavaScript-Nodejs-File-Upload-Example-Ajax)
- [How to Upload Files With React](https://codefrontend.com/file-upload-reactjs/)
- [Node.js e TypeScript: O como e com testes](https://oieduardorabelo.medium.com/node-js-e-typescript-o-como-e-com-testes-7affce2c02a8)
- [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp)

## Aditional Info

This project is a Tech Chalenge runned by [Coodesh](https://coodesh.com/).
