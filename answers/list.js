'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {

  let queryQuestionId = "";
  if (event.queryStringParameters && event.queryStringParameters.questionId) {
    console.log("Received questionId: " + event.queryStringParameters.questionId);
    queryQuestionId = event.queryStringParameters.questionId;
  }

  const params = {
     TableName: process.env.ANSWERS_DYNAMODB_TABLE,
     ExpressionAttributeValues: {
       ':qId': queryQuestionId,
      },
      FilterExpression: 'questionId = :qId',
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
