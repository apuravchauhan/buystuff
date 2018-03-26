'use strict';
//@author: apuravchauhan
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

console.log('Loading pricing function');
/*on demand lambda function to read a static config file and return json response.
This lambda is called via api gateway configured via proxy lambda integration*/
exports.handler = function (event, context, callback) {
    var objectData = {};
    var type = "bank";
    var response = { statusCode: 200, headers: { 'Access-Control-Allow-Origin': '*' } };
    if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
        console.log("Received type: " + event.queryStringParameters.type);
        if (event.queryStringParameters.type == 'package') {
            type = "package";
        }
    }
    s3.getObject({
        Bucket: "static-config",
        Key: "config.json"
    }, (err, data) => {
        let error = null;
        if (err) {
            error = err;
        } else {
            objectData = JSON.parse(data.Body.toString('utf-8'));
            console.log("Data received", objectData);
            response.body = JSON.stringify(objectData[type])
            console.log("response: " + JSON.stringify(response))
        }
        callback(error, response);
    });

};