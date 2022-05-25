function validator(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validUri = /^[\w.]+$/;
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const invalidMessage = /^[^<>\\&'"]*$/;

    if (!validMethods.includes(request.method) || !request.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.hasOwnProperty('uri') || !request.uri == '*' || !request.uri.match(validUri) || request.uri == '') {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!request.hasOwnProperty('version') || !validVersion.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!request.hasOwnProperty('message') || !request.message.match(invalidMessage) || request.message != '') {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}


let param = {
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
};
  
  

console.log(validator(param))
