const {GraphQLServer} = require('graphql-yoga');

const db = require('./db');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

// Create the GraphQL Yoga Server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolveValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({...req, db})
  });
}

module.exports = createServer;