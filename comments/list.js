'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.list = (event, context, callback) => {

  let queryAnswerId = "";
  if (event.queryStringParameters && event.queryStringParameters.answerId) {
    console.log("Received answerId: " + event.queryStringParameters.answerId);
    queryAnswerId = event.queryStringParameters.answerId;
  }

  const params = {
     TableName: process.env.COMMENTS_DYNAMODB_TABLE,
     ExpressionAttributeValues: {
       ':aId': queryAnswerId,
      },
      FilterExpression: 'answerId = :aId',
  };  

  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the users.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
