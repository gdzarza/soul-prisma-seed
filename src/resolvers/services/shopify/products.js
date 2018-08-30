const client  = require('./shopify-graphql-js-client');
import {gql} from 'babel-plugin-graphql-js-client-transform';

const query = () => client.send(gql(client)`
    query {
      node(id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzk4OTUyODE0NzU=") {
        id
          ... on Product {
          title
        }
      }
    }
  `).then((result) => {
    console.log('exec');
    return result.data.node;
});

module.exports = query;