const fetch = require('node-fetch');
const Client = require('shopify-buy');

global.fetch = fetch;

const client = Client.buildClient({
    storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
    domain: 'graphql.myshopify.com'
});

module.exports = client;
