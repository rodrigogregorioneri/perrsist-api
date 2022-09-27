const AWS = require("aws-sdk");

const connect = () =>{
   return new AWS.DynamoDB.DocumentClient();
}

module.exports = connect