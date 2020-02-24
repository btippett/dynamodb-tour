var params = {
  RequestItems: { // A map of TableName to Put or Delete requests for that table
      poppies: [ // a list of Put or Delete requests for that table
          { // An example PutRequest
              PutRequest: {
                  Item: { // a map of attribute name to AttributeValue
                      // attribute_value (string | number | boolean | null | Binary | DynamoDBSet | Array | Object)
                      date: 1,
                      time: 1,
                      lastName: 'Davis',
                      firstName: 'James',
                      rank: 'Private',
                      nickname: 'Joker',
                      // ... more attributes ...
                  }
              }
          },
          {
            PutRequest: {
                Item: {
                    date: 2,
                    time: 2,
                    lastName: 'Pyle',
                    firstName: 'Gomer',
                    rank: 'Private',
                }
            }
          },
          {
            PutRequest: {
                Item: {
                    date: 3,
                    time: 3,
                    lastName: 'Hartman',
                    firstName: 'L',
                    rank: 'Gunnery Sergeant',
                }
            }
          },
          // { // An example DeleteRequest
          //     DeleteRequest: {
          //         Key: {
          //             date: 3, //(string | number | boolean | null | Binary)
          //             // more primary attributes (if the primary key is hash/range schema)
          //             time: 3,
          //         }
          //     }
          // },
          // ... more put or delete requests ...
      ],
      // ... more tables ...
  },
  ReturnConsumedCapacity: 'TOTAL', // optional (NONE | TOTAL | INDEXES)
  ReturnItemCollectionMetrics: 'TOTAL', // optional (NONE | SIZE)
};
docClient.batchWrite(params, function(err, data) {
  if (err) ppJson(err); // an error occurred
  else ppJson(data); // successful response
});
