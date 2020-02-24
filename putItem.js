var params = {
  "TableName": "poppies",
  "Item": {
    "date": {
      "N": "1"
    },
    "time": {
      "N": "1"
    },
    "firstName": {
      "S": "William"
    },
    "lastName": {
      "S": "Kilgore"
    },
    "conflict": {
      "S": "Nam"
    },
    "branch": {
      "S": "U.S. Marines"
    },
    "rank": {
      "S": "Colonel"
    }
  },
  ReturnValues: 'ALL_OLD', // optional (NONE | ALL_OLD)
  ReturnConsumedCapacity: 'INDEXES', // optional (NONE | TOTAL | INDEXES)
  ReturnItemCollectionMetrics: 'SIZE', // optional (NONE | SIZE)
}

dynamodb.putItem(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});