const amazon = require('amazon-product-api');
const dotenv = require('dotenv');

dotenv.load();

const client = amazon.createClient({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET
});

module.exports = function(keywords) {
  return client.itemSearch({
    keywords,
    searchIndex: 'SportingGoods',
    responseGroup: 'ItemAttributes,Images'
  });
}
