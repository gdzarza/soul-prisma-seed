
const mutations = {
    createInfluencer: async (parent, args, context, info) => {
        const {
            cognitoId,
            name
        } = args;
        return context.db.mutation.createInfluencer(
            {
                data: {
                    cognitoId,
                    name
                }
            },
            info
        )
    }
};

module.exports = mutations;
