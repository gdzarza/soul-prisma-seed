const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
const resolvers = require('./resolvers');

const soulerData = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4467', //process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
    //secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
    debug: true, // log all GraphQL queries & mutations
});

const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        soulerData
    })
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
