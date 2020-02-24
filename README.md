# dynamodb-tour
A quick tour of Amazon's DynamoDB NoSQL database.

## Objective
For this tour we'll be working on a database designed to support the [Poppy in Memory site](https://poppyinmemory.usaacloud.com/). We'll start by going over the basics in this [DynamoDB PowerPoint](https://publicisgroupe-my.sharepoint.com/:p:/g/personal/btippett_publicisgroupe_net/EXb1CuHbv01LmB1U1QrP1noBRO5HoWtjUtMXWBKF6YfMqg?e=vZyH6E). Next, we'll talk about the design of our database and what things we need to consider when designing it. We'll then create a model of our database using the [NoSQL Workbench for Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html) and finally, we'll run through the usual [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) using a [local version of DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html) and the [DynamoDB JavaScript Shell](https://aws.amazon.com/blogs/aws/sweet-treats-for-dynamodb-users/).

## Setup
- You'll need a Java run-time environment, DynamoDB local, and the NoSQL Workbench installed. The easiest way to do this is with [Homebrew](https://brew.sh/): `brew cask install java dynamodb-local nosql-workbench-for-amazon-dynamodb`
- By default, data that you save to your local DynamoDB instance will be saved to disk. For messing around, I like to run the DB in memory so that once you stop it your data is gone. If you installed DynamoDB Local using Homebrew you'll run it with the command `dynamodb-local -inMemory -delayTransientStatuses`. If you didn't install using Homebrew, you'll need to run it from the folder where you unzipped it with the command `java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -inMemory -delayTransientStatuses`. (The `-delayTransientStatuses` flag is optional but it will make working with the database more realistic by introducing artificial delays like you would get when using the real product.)
- Assuming you're using the default port for the database you'll access the JavaScript shell at: [http://localhost:8000/shell](http://localhost:8000/shell).

## Resources
- [DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/) — documents the database itself
- [DynamoDB JavaScript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html) — documents the JavaScript SDK used to access the database from NodeJS or a web browser
- [DynamoDB JavaScript Examples](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-examples.html) — some basic JS examples
