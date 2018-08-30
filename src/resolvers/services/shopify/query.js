const client  = require('./shopify-graphql-js-client');
import {gql} from 'babel-plugin-graphql-js-client-transform';

const shopNameAndProductsPromise = () => client.send(gql(client)`
    query {
      shop {
        name
        description
        products(first:20) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              title
              options {
                name
                values
              }
              variants(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    title
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      src
                    }
                    price
                  }
                }
              }
              images(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    return result.model.shop;
});

module.exports = shopNameAndProductsPromise;