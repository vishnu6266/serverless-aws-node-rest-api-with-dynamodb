'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {

  let queryAnnoId = "";
  if (event.queryStringParameters && event.queryStringParameters.annotationId) {
    console.log("Received annotationId: " + event.queryStringParameters.annotationId);
    queryAnnoId = event.queryStringParameters.annotationId;
  }
  
  const params = {
     TableName: process.env.QUESTIONS_DYNAMODB_TABLE,
     ExpressionAttributeValues: {
       ':aId': queryAnnoId,
      },
      FilterExpression: 'annotationId = :aId',
  }; 

  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the questions.',
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
