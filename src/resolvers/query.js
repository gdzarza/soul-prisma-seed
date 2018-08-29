//const {getUserId, Context} = require('../utils');
const {productsPromise} = require('../services/shopify/shopify');

const Query = {
    post: (parent, args, context, info) => {
        const {id} = args;
        return context.db.query.post({where: {id: id}}, info)
    },
    posts: (parent, args, context, info) => {
        return productsPromise.then(
            products => {
                const titles = products.map(p => ({id: p.id, title: p.title}));
                console.log('the products!', titles);
                return context.db.query.posts({}, info)
            }
        );

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