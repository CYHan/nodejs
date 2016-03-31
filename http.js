/**
 * Created by Yohan on 2016-03-25.
 */
var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World\n");
}),listen(1337, '127.0.0.1');
/**
 * req는 클라이언트에서 서버로 request 정보를 , res는 서버에서 클라이언트로 response 정보를 담고있음.
 * 127.0.0.1 에 대해 들으며 1337 번 포트를 통해서 통신을 할 수 있다.
 */

console.log('Server ruhnning at http://127.0.0.1:1337');




