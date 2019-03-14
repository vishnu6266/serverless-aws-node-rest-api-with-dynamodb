'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {

  let queryPageId = "";
  if (event.queryStringParameters && event.queryStringParameters.pageId) {
    console.log("Received pageId: " + event.queryStringParameters.pageId);
    queryPageId = event.queryStringParameters.pageId;
  }
  
  const params = {
     TableName: process.env.ANNOTATIONS_DYNAMODB_TABLE,
     ExpressionAttributeValues: {
       ':pId': queryPageId,
      },
      FilterExpression: 'pageId = :pId',
  };

  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the annotations.',
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
