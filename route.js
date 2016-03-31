/**
 * Created by Yohan on 2016-03-25.
 */
var http = require('http');

http.createServer(function (req, res){
   if(req.url == '/' && req.method == 'GET'){
       res.writeHead(200, {'Content-Type' : 'text/html'});
       res.end('Hello <strong> homne page </strong>');
   } else if (req.url == '/account' && req.method == 'GET'){
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end("Hello<strong> account page </strong>");
   } else{
       res.writeHead(404, {'Content-Type': 'text/html'});
       res.end();
   }
}).listen(1337, '127.0.0.1');
/**
 * request.url 을 통해 라우터 설정을 할 수 있으며
 * 이것은 client 가 server 에 request 할때의 정보에 들어간다.
 * end() 메소드 같은 경우는 res 혹은 req 에 대해 마지막으로 뿌려주는 역할을 한다.
*/

console.log('Server ruhnning at http://127.0.0.1:1337');



