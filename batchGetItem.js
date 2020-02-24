var params = {
    RequestItems: { // map of TableName to list of Key to get from each table
        poppies: {
            Keys: [ // a list of primary key value maps
                {
                    date: 1, //(string | number | boolean | null | Binary)
                    // ... more key attributes, if the primary key is hash/range
                    time: 1,
                },
                // ... more keys to get from this table ...
                {
                    date: 2,
                    time: 2,
                },
                {
                    date: 3,
                    time: 3,
                },
            ],
            ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
                '#rank': 'rank', // rank is a reserved keyword
            },
            ProjectionExpression: '#rank, firstName, lastName', // option (attributes to retrieve from this table)
            ConsistentRead: false, // optional (true | false)
        },
        // ... more tables and keys ...
    },
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
};
docClient.batchGet(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
