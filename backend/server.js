//apollo
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require( '@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const http = require( 'http');
const cors = require( 'cors' );
const { json } = require( 'body-parser');
const typeDefs = require( './schema/typeDefs');
const resolvers = require( './schema/resolver');


//Express Server
const express = require("express");
const dotenv = require('dotenv');
dotenv.config()
const Port = process.env.ServerPort;

//create app
async function StartSever(){
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    '/graphql',
    cors(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token , language: req.headers["accept-language"] }),
    }),
  );

  await new Promise((resolve) => httpServer.listen({ port: Port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${Port}/graphql`);
}

 StartSever();
