/**
 * Created by Yohan on 2016-03-25.
 */
var http = require('http');

http.createServer(function (req, res){
    res.end('Your user agent is ' + req.headers['user-agent']);
}).listen(1337, '127.0.0.1');/**
 * Created by Yohan on 2016-03-25.
 */

/**
 * req.header 를 통해서 request header 값을 서버로 부터 쉽가 가져올 수 있다.
 */

console.log('Server running at http');