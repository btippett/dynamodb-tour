var params = {
    TableName: 'poppies',
    IndexName: 'fullName', // optional (if querying an index)
    KeyConditionExpression: '#last = :last AND begins_with(#first, :w)', // a string representing a constraint on the attribute
    // FilterExpression: 'attr_name = :val', // a string representing a constraint on the attribute
    ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        '#last': 'lastName',
        '#first': 'firstName',
    },
    ExpressionAttributeValues: { // a map of substitutions for all attribute values
      ':last': { S: 'Kilgore' },
    //   ':first': 'William',
      ':w': { S: 'W' },
    },
    ScanIndexForward: true, // optional (true | false) defines direction of Query in the index
    Limit: 5, // optional (limit the number of items to evaluate)
    ReturnConsumedCapacity: 'TOTAL', // optional (NONE | TOTAL | INDEXES)
};
dynamodb.query(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
