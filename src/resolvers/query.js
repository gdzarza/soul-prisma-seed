//const {getUserId, Context} = require('../utils');

const Query = {
    post: (parent, args, context, info) => {
        const {id} = args;
        return context.db.query.post({where: {id: id}}, info)
    },
    posts: (parent, args, context, info) => {
        return context.db.query.posts({}, info)
    },
    influencer: (parent, args, context, info) => {
        const {id} = args;
        return context.db.query.influencer({where: {id: id}}, info)
    },
    influencers: (parent, args, context, info) => {
        return context.db.query.influencers({}, info)
    }
};

module.exports = Query;