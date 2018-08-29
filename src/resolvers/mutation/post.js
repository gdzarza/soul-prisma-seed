
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
            influencerId
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
                    influencer: {
                        connect: {
                            id: influencerId,
                        }
                    }
                }
            },
            info
        )
    }
};

module.exports = postMutations;
