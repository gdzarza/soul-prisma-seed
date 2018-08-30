//const {getUserId, Context} = require('../utils');
const {shop, product} = require('./services/shopify');

const Query = {
    post: (parent, args, context, info) => {
        const {id} = args;
        return context.soulerData.query.post({where: {id: id}}, info)
    },
    posts: async (parent, args, context, info) => {
        const prod = await product();
        console.log('prod', prod);
        return context.soulerData.query.posts({}, info);
    },
    influencer: (parent, args, context, info) => {
        const {id} = args;
        return context.soulerData.query.influencer({where: {id: id}}, info)
    },
    influencers: (parent, args, context, info) => {
        return context.soulerData.query.influencers({}, info)
    }
};

module.exports = Query;