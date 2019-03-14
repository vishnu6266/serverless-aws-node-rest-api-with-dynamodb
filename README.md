<!--
title: 'AWS Serverless REST API example in NodeJS'
description: 'This example demonstrates how to setup a RESTful Web Service allowing you to create, list, get, update and delete Todos. DynamoDB is used to store the data.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/ozbillwang'
authorName: 'Bill Wang'
authorAvatar: 'https://avatars3.githubusercontent.com/u/8954908?v=4&s=140'
-->
# Serverless REST API

This example demonstrates how to setup a [RESTful Web Services](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services) allowing you to create, list, get, update and delete Todos. DynamoDB is used to store the data. This is just an example and of course you could use any data storage as a backend.

## Structure

This service has a separate directory for each entity. For each entity and operation exactly one file exists e.g. `users/delete.js`. In each of these files there is exactly one function which is directly attached to `module.exports`.

The idea behind the `userts` directory is that in case you want to create a service containing multiple resources e.g. users, notes, comments you could do so in the same service. While this is certainly possible you might consider creating a separate service for each resource. It depends on the use-case and your preference.

## Use-cases

- API for a Web Application
- API for a Mobile Application

## Setup

```bash
npm install
```

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy
```

Similar result is expected.

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
.....
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service HMCF-WebAnno.zip file to S3 (22.77 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
Serverless: Stack update finished...
Service Information
service: HMCF-WebAnno
stage: dev
region: us-east-1
stack: HMCF-WebAnno-dev
resources: 100
api keys:
  None
endpoints:
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/users/{id}
  PUT - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/users/{id}
  DELETE - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/users/{id}
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/pages
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/pages
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/pages/{id}
  PUT - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/pages/{id}
  DELETE - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/pages/{id}
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/annotations
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/annotations
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/annotations/{id}
  PUT - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/annotations/{id}
  DELETE - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/annotations/{id}
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/questions
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/questions
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/questions/{id}
  PUT - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/questions/{id}
  DELETE - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/questions/{id}
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/answers
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/answers
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/answers/{id}
  PUT - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/answers/{id}
  DELETE - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/answers/{id}
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/comments
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/comments
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/comments/{id}
  PUT - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/comments/{id}
  DELETE - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/comments/{id}
functions:
  createUser: HMCF-WebAnno-dev-createUser
  listUser: HMCF-WebAnno-dev-listUser
  getUser: HMCF-WebAnno-dev-getUser
  updateUser: HMCF-WebAnno-dev-updateUser
  deleteUser: HMCF-WebAnno-dev-deleteUser
  createPage: HMCF-WebAnno-dev-createPage
  listPage: HMCF-WebAnno-dev-listPage
  getPage: HMCF-WebAnno-dev-getPage
  updatePage: HMCF-WebAnno-dev-updatePage
  deletePage: HMCF-WebAnno-dev-deletePage
  createAnnotation: HMCF-WebAnno-dev-createAnnotation
  listAnnotation: HMCF-WebAnno-dev-listAnnotation
  getAnnotation: HMCF-WebAnno-dev-getAnnotation
  updateAnnotation: HMCF-WebAnno-dev-updateAnnotation
  deleteAnnotation: HMCF-WebAnno-dev-deleteAnnotation
  createQuestion: HMCF-WebAnno-dev-createQuestion
  listQuestion: HMCF-WebAnno-dev-listQuestion
  getQuestion: HMCF-WebAnno-dev-getQuestion
  updateQuestion: HMCF-WebAnno-dev-updateQuestion
  deleteQuestion: HMCF-WebAnno-dev-deleteQuestion
  createAnswer: HMCF-WebAnno-dev-createAnswer
  listAnswer: HMCF-WebAnno-dev-listAnswer
  getAnswer: HMCF-WebAnno-dev-getAnswer
  updateAnswer: HMCF-WebAnno-dev-updateAnswer
  deleteAnswer: HMCF-WebAnno-dev-deleteAnswer
  createComment: HMCF-WebAnno-dev-createComment
  listComment: HMCF-WebAnno-dev-listComment
  getComment: HMCF-WebAnno-dev-getComment
  updateComment: HMCF-WebAnno-dev-updateComment
  deleteComment: HMCF-WebAnno-dev-deleteComment
layers:
  None


```


## Usage

You can create, retrieve, update, or delete todos with the following commands:

## User

### Create a User

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users --data '{ "userName":"john.doe","firstName": "John","lastName":"Doe","active":true }'
```

Example Result:
```bash
{"userId":"06915420-45dc-11e9-ad61-39ddbb12479e","userName":"john.doe","firstName":"John","lastName":"Doe","active":true,"createdAt":1552514691681,"updatedAt":1552514691681}%
```

#### List all Users

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users
```

Example output:
```bash
[{"active":true,"lastName":"Doe","userId":"06915420-45dc-11e9-ad61-39ddbb12479e","updatedAt":1552514691681,"userName":"john.doe","createdAt":1552514691681,"firstName":"John"}
```

### Get one User

```bash
# Replace the <id> part with a real userId from your User table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/<id>
```

Example Result:
```bash
{"active":true,"lastName":"Doe","userId":"06915420-45dc-11e9-ad61-39ddbb12479e","updatedAt":1552514691681,"userName":"john.doe","createdAt":1552514691681,"firstName":"John"}
```

### Update a User

```bash
# Replace the <id> part with a real id from your User table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/<id> --data '{ "firstName": "John","lastName": "Doe", "active": true }'
```

Example Result:
```bash
{"active":true,"firstName":"John","lastName":"Doe","updatedAt":1552514983383,"userId":"06915420-45b12479e-ad61-39ddb"}
```

### Delete a User

```bash
# Replace the <id> part with a real id from Users table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/<id>
```

No output


## Page

### Create a Page

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/pages --data '{"pageURL":"https://google.com","createdBy": "john.doe"}'
```

Example Result:
```bash
{"pageId":"c63320c0-45fe-11e9-90f8-fb64f3b2b290","pageURL":"https://google.com","createdBy":"john.doe","createdAt":1552529616076,"updatedAt":"1552529616076"}
```

Debug
```bash
serverless invoke --function createPage --data '{"pageURL":"https://google.com","createdBy": "john.doe"}' -l
```
#### List all pages

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/pages?pageURL=[query url]
```

Example output:
```bash
{"pageId":"c63320c0-45fe-11e9-90f8-fb64f3b2b290","pageURL":"https://google.com","createdBy":"john.doe","createdAt":1552529616076,"updatedAt":1552md-lt13608mloecorp:aws-node-rest-api-with-dynamodb snair$ curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/pages
[{"createdAt":1552529616076,"pageURL":"https://google.com","createdBy":"john.doe","updatedAt":1552529616076,"pageId":"c63320c0-45fe-11e9-90f8-fb64f3b2b290"}]
```

## Annotations

### Create an annotation on a page

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/annotations --data '{"pageId":"c63320c0-45fe-11e9-90f8-fb64f3b2b290","section":"mycourse","createdBy": "john.doe"}'
```

Example Result:
```bash
{"annotationId":"5e89d040-460d-11e9-9d9a-f7ecfc95429c","pageId":"c63320c0-45fe-11e9-90f8-fb64f3b2b290","section":"mycourse","createdBy":"john.doe","createdAt":1552535884612,"updatedAt":1552535884612}
```

```
#### List all annotations on a page

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/annotations?pageId=[page id]
```

Example output:
```bash
[{"createdAt":1552535884612,"section":"mycourse","createdBy":"john.doe","updatedAt":1552535884612,"annotationId":"5e89d040-460d-11e9-9d9a-f7ecfc95429c","pageId":"c63320c0-45fe-11e9-90f8-fb64f3b2b290"}]
```

## Questions

### Create a question on an annotation

```bash
curl -X POST https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/questions --data '{"annotationId":"5e89d040-460d-11e9-9d9a-f7ecfc95429c","questionText":"What is this section about?","createdBy": "john.doe"}'
```

Example Result:
```bash
{"questionId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","annotationId":"5e89d040-460d-11e9-9d9a-f7ecfc95429c","questionText":"What is this section about?","upVoteCount":0,"downVoteCount":0,"createdBy":"john.doe","createdAt":1552538896543,"updatedAt":1552538896543}
```
### Vote a question 


curl -X PUT https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/questions/<id>/vote --data '{"annotationId":"5e89d040-460d-11e9-9d9a-f7ecfc95429c","liked":true or false}'

Example Result:
```bash
{"upVoteCount":1,"downVoteCount":0,"questionText":"What is this section about?","questionId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","updatedAt":1552546523279,"createdAt":1552538896543,"createdBy":"john.doe","annotationId":"5e89d040-460d-11e9-9d9a-f7ecfc95429c"}
```

#### List all quesions on an annotation

```bash
curl https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/questions?annotationId=<annotation id>
```

Example output:
```bash
[{"upVoteCount":0,"downVoteCount":0,"questionText":"What is this section about?","questionId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","updatedAt":1552538896543,"createdAt":1552538896543,"createdBy":"john.doe","annotationId":"5e89d040-460d-11e9-9d9a-f7ecfc95429c"}]
```


### Create an answer for a question

```bash
curl -X POST https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/answers --data '{"questionId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","answerText":"This is my answer","createdBy": "john.doe"}'
```

Example Result:
```bash
{"answerId":"644c7900-461d-11e9-aa4d-7d2ab4d5a091","questionId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","answerText":"This is my answer","upVoteCount":0,"downVoteCount":0,"createdBy":"john.doe","createdAt":1552542766224,"updatedAt":1552542766224}
```
### Vote a answer 

curl -X PUT https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/answers/644c7900-461d-11e9-aa4d-7d2ab4d5a091/vote --data '{"questionId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","liked":false}'

Example Result:
```bash
{"upVoteCount":0,"downVoteCount":1,"questionId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","updatedAt":1552546956408,"answerId":"644c7900-461d-11e9-aa4d-7d2ab4d5a091","answerText":"This is my answer","createdAt":1552542766224,"createdBy":"john.doe"}
```
#### List all answers for a question

```bash
curl https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/answers?questionId=<question id>
```

Example output:
```bash
[{"upVoteCount":0,"downVoteCount":0,"questionId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","updatedAt":1552542766224,"answerId":"644c7900-461d-11e9-aa4d-7d2ab4d5a091","answerText":"This is my answer","createdAt":1552542766224,"createdBy":"john.doe"}]
```

### Create an comment on an answer

```bash
curl -X POST https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/comments --data '{"answerId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","commentText":"This is my comment","createdBy": "john.doe"}'
```

Example Result:
```bash
{"commentId":"3dfd9430-461f-11e9-9ece-b7caabc48d37","answerId":"61ca02f0-4614-11e9-88a4-dfe4685122e8","commentText":"This is my comment","createdBy":"john.doe","createdAt":1552543560947,"updatedAt":1552543560947}
```

#### List all comments for an answer

```bash
curl https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/comments?answerId=<answer id>
```

Example output:
```bash
[{"commentText":"This is my comment","createdAt":1552543560947,"commentId":"3dfd9430-461f-11e9-9ece-b7caabc48d37","createdBy":"john.doe","updatedAt":1552543560947,"answerId":"61ca02f0-4614-11e9-88a4-dfe4685122e8"}]
```





## Scaling

### AWS Lambda

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).

### DynamoDB

When you create a table, you specify how much provisioned throughput capacity you want to reserve for reads and writes. DynamoDB will reserve the necessary resources to meet your throughput needs while ensuring consistent, low-latency performance. You can change the provisioned throughput and increasing or decreasing capacity as needed.

This is can be done via settings in the `serverless.yml`.

```yaml
  ProvisionedThroughput:
    ReadCapacityUnits: 1
    WriteCapacityUnits: 1
```

In case you expect a lot of traffic fluctuation we recommend to checkout this guide on how to auto scale DynamoDB [https://aws.amazon.com/blogs/aws/auto-scale-dynamodb-with-dynamic-dynamodb/](https://aws.amazon.com/blogs/aws/auto-scale-dynamodb-with-dynamic-dynamodb/)


## Documentation

Please refer following link.
https://www.dropsource.com/blog/serverless-rest-api/


