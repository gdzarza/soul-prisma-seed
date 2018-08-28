const Query = require('./query');
const post = require('./mutation/post');

//const { auth } = require('./mutation/auth');
//const {AuthPayload} = require(./authPayload');

const resolvers = {
    Query,
    Mutation: {
        //...auth,
        ...post
    }
    //,    AuthPayload
};

module.exports = resolvers;
