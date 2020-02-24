var params = {
    TableName: 'poppies',
    Key: { // The primary key of the item (a map of attribute name to AttributeValue)

        'date': { N: '1' }, //(string | number | boolean | null | Binary)
        'time': { N: '1' }
    },
    UpdateExpression: 'SET #lastName = :newLastName, #firstName = :newFirstName', // String representation of the update to an attribute
        // SET set-action , ...
        // REMOVE remove-action , ...  (for document support)
        // ADD add-action , ...
        // DELETE delete-action , ...  (previous DELETE equivalent)
    // ConditionExpression: '#lastName = :oldLastName AND #firstName = :oldFirstName', // optional String describing the constraint to be placed on an attribute
    ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        '#lastName': 'lastName',
        '#firstName': 'firstName',
    },
    ExpressionAttributeValues: { // a map of substitutions for all attribute values
        ':newLastName': { S: 'Pyle' },
        ':newFirstName': { S: 'Gomer' },
    },
    ReturnValues: 'UPDATED_NEW', // optional (NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW)
    ReturnConsumedCapacity: 'INDEXES', // optional (NONE | TOTAL | INDEXES)
    ReturnItemCollectionMetrics: 'SIZE', // optional (NONE | SIZE)
};
dynamodb.updateItem(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
