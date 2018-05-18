'use strict';

exports.handler = (event, context, callback) => {
  try {
    let body = JSON.parse(event.body)
    console.log(JSON.stringify(body))

    callback(null, {
      statusCode: 204,
      body: ""
    })
  } catch (ex) {
    callback(ex)
  }
}
