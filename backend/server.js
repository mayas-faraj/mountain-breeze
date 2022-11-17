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
    setting: Setting!
  }

  type Setting {
    key(name:String): String!
    value: String
    info: Info
  }

  type Info {
    creator: String
    date: String
  }
`);

let root = { setting:(args)=>({key: "k0", value: JSON.stringify(args), info: {creator: "c1", date: "now"}}) };

// routing
app.get("/", (req, res) =>
  res.status(200).json({ message: "connection to server success" })
);

app.use('/graphql-api', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

// start app
app.listen(3000, () => console.log("server started at: http://localhost:3000/graphql-api"));
