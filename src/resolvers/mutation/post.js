
const postMutations = {
    createPost: async (parent, args, context, info) => {
        const {
            title,
            description,
            productShopifyId,
            productName,
            brandShopifyId,
            brandName,
            category,
            status,
            influencer
        } = args;
        return context.db.mutation.createPost(
            {
                data: {
                    title,
                    description,
                    productShopifyId,
                    productName,
                    brandShopifyId,
                    brandName,
                    category,
                    status,
                    influencer
                }
            },
            info
        )
    }
};

module.exports = postMutations;
