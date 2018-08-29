const client = require('./js-buy-sdk');

const shopPromise = client.shop.fetchInfo;
const productsPromise = client.product.fetchAll();

module.exports = {
    shopPromise,
    productsPromise
};
