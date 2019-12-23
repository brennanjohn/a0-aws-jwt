# a0-aws-jwt

lambda.js contains the code to be run on the AWS Lambda as part of the "Securing AWS HTTP APIs with JWT Authorizers" Auth0 Blog post.

## Next Steps

I'd like to create a script (using bash or Node) to perform the following using CLI tools:

* Compress lambda.js to a zip file
* Use AWS CLI to:
  * create Lambda
  * upload the zip file to the Lambda
  * create an HTTP API
  * connect API to Lambda
  * Add JWT Authorizer to Lambda
  * create a DynamoDB table