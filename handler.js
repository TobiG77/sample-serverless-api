'use strict';

module.exports.run = function(event, context, cb) {

    console.log("received event", event);

    if (event.path && event.method) {
        console.log("Invoked handlePathRequest for: ", event);
        handlePathRequest(event, context, cb);
    } else {
        console.log("unhandled event", event);
        console.log("unhandled context", context);
        context.fail("Unable to process request!");
    };

}

function handlePathRequest(event,context,cb) {

    let AWS = require('aws-sdk');
    let dynamodoc = require('dynamodb-doc');
    let docClient =new AWS.DynamoDB.DocumentClient;

    const action = event.method + '/' + Object.keys(event.path)[0]

    switch (action) {
        case 'GET/Title':

            var params = {
                TableName: 'Movies',
                ConsistentRead: true,
                Key: {
                    Title: decodeURIComponent(event.path["Title"]),
                }
            };

            docClient.get(params, cb);
            break;
        case 'PUT/Title':

            var params = {
                TableName: 'Movies',
                Item: event.body
            }
            docClient.put(params,cb);
            break;
        default:
            cb(new Error(`Unrecognized path "${action}`));

    };
}