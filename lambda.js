const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "WishList";

exports.handler = async (event, context) => {
  switch(event.httpMethod) {
    case "GET":
      const data = await ddb.scan({ TableName: TABLE_NAME }).promise();
      return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      };
    case "POST":
      const {name, url, description} = event.body;
            
      await ddb.put({
        TableName: TABLE_NAME,
        Item: {
          id: context.awsRequestId,
          name,
          url,
          description
        }
      }).promise();
            
      return {
        statusCode: 201,
        body: JSON.stringify({
          id: context.awsRequestId,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      };
    default:
      break;
  }
};
