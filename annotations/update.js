'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  if (typeof data.firstName !== 'string' || typeof data.lastName !== 'string' || typeof data.active !== 'boolean') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t update the user.',
    });
    return;
  }

  const params = {
    TableName: process.env.ANNOTATIONS_DYNAMODB_TABLE,
    Key: {
      annotationId: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#user_firstName': 'firstName',
      '#user_lastName': 'lastName',
    },
    ExpressionAttributeValues: {
      ':userName': data.userName,
      ':firstName': data.firstName,
      ':lastName': data.lastName,
      ':active': data.active,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET #user_firstName = :firstName,#user_lastName = :lastName, active = :active, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  // update the todo in the database
  dynamoDb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the user.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};
