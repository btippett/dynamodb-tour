const parameters = {
  TableName : 'poppies',
  KeySchema: [
    { AttributeName: 'date', KeyType: 'HASH' },
    { AttributeName: 'time', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'date', AttributeType: 'N' },
    { AttributeName: 'time', AttributeType: 'N' },
    { AttributeName: 'lastName', AttributeType: 'S' },
    { AttributeName: 'firstName', AttributeType: 'S' }
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'fullName',
      KeySchema: [
        { AttributeName: 'lastName', KeyType: 'HASH' },
        { AttributeName: 'firstName', KeyType: 'RANGE' }
      ],
      Projection: {
        ProjectionType: 'ALL'
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      }
    }
  ],
  // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ProvisionedThroughput.html
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
}

function createTable(parameterOverrides, callback) {
  const
    db = dynamodb // In the shell you already have a dynamodb variable that contains the DB ref, outside the shell use `new AWS.DynamoDB()`
    params = Object.assign({}, parameters, parameterOverrides)
  callback = typeof callback === 'function' ? callback : () => {}
  db.listTables((error, data) => {
    if (error) return callback(error)
    const
      newTableName = params.TableName,
      existingTableNames = data.TableNames,
      alreadyExists = existingTableNames.indexOf(newTableName) > -1
    if (alreadyExists) {
      callback(new Error('The table ' + newTableName + ' already exists.'))
    } else {
      db.createTable(params, (error) => {
        if (error) return callback(error)
        db.waitFor('tableExists', { TableName: newTableName }, callback)
      })
    }
  })
}

createTable({}, (error, data) => {
  if (error) ppJson(error)
  else ppJson(data)
})
