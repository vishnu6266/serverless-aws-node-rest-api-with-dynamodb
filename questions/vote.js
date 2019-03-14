'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
if (typeof data.annotationId !== 'string' || typeof data.liked !== 'boolean') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Validation Failed.Couldn\'t update the vote.',
    });
    return;
  }

  let upVoteIncrement = 0;
  let downVoteIncrement = 0;
    
  if (data.liked) {
    upVoteIncrement = 1;
  } else {
    downVoteIncrement = 1;
  }

  const params = {
    TableName: process.env.QUESTIONS_DYNAMODB_TABLE,
    Key: {
      questionId: event.pathParameters.id,
      annotationId: data.annotationId,
    },
    ExpressionAttributeValues: {
      ':upVoteIncrement': upVoteIncrement,
      ':downVoteIncrement': downVoteIncrement,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET upVoteCount = upVoteCount + :upVoteIncrement,downVoteCount = downVoteCount + :downVoteIncrement,updatedAt = :updatedAt',
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
        body: 'Couldn\'t update the vote.',
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
