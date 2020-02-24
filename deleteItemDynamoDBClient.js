var params = {
    TableName: 'poppies',
    Key: { // a map of attribute name to AttributeValue for all primary key attributes
        "date": {
          N: "1"
        },
        "time": {
          N: "1"
        }
        // attribute_value (string | number | boolean | null | Binary)
        // more attributes...
    },
    // ConditionExpression: 'attribute_exists(attribute_name)', // optional String describing the constraint to be placed on an attribute
    // ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
    //     //'#name': 'attribute name'
    // },
    // ExpressionAttributeValues: { // a map of substitutions for all attribute values
    //     //':value': 'VALUE'
    // },
    ReturnValues: 'ALL_OLD', // optional (NONE | ALL_OLD)
    ReturnConsumedCapacity: 'TOTAL', // optional (NONE | TOTAL | INDEXES)
    ReturnItemCollectionMetrics: 'SIZE', // optional (NONE | SIZE)
};
dynamodb.deleteItem(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
