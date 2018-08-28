//const {getUserId, Context} = require('../utils');

const Query = {
    post: (parent, args, context, info) => {
        const {id} = args;
        return context.db.query.post({where: {id: id}}, info)
    },
    allPosts: (parent, args, context, info) => {
        return context.db.query.posts({}, info)
    }
};

module.exports = Query;