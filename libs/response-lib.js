export function success(body) {
  // Return status code 200 and the newly created item
  return buildResponse(200, body);
}

export function failure(body) {
  console.log(body);
  // Return status code 500 on error
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    // Set response headers to enable CORS (Cross-Origin Resource Sharing)
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}