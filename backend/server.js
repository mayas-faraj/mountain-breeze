// import modules
const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const {buildSchema} = require("graphql");
const PrismaClient=require("@prisma/client");

// create app
const app = express();

// define ql-schema
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

let root = { hello:()=>'Hello world' };

// routing
app.get("/", (req, res) =>
  res.status(200).json({ message: "connection to server success" })
);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

// start app
app.listen(3000, () => console.log("server started at: http://localhost:3000/graphql"));
