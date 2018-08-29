const Query = require('./query');
const post = require('./mutation/post');
const influencer = require('./mutation/influencer');

//const { auth } = require('./mutation/auth');
//const {AuthPayload} = require(./authPayload');

const resolvers = {
    Query,
    Mutation: {
        ...post,
        ...influencer

        //...auth,
    }
    //,    AuthPayload
};

module.exports = resolvers;
