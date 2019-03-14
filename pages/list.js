'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {

  console.log("request: " + JSON.stringify(event));
    
  let url = "";
  if (event.queryStringParameters && event.queryStringParameters.pageURL) {
    console.log("Received pageURL: " + event.queryStringParameters.pageURL);
    url = event.queryStringParameters.pageURL;
  }
  
  const params = {
     TableName: process.env.PAGES_DYNAMODB_TABLE,
     ExpressionAttributeValues: {
       ':pURL': url,
      },
      ProjectionExpression: 'pageId,pageURL,createdBy,createdAt,updatedAt',
      FilterExpression: 'pageURL = :pURL',
  };

  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the pages.',
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
