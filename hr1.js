/**
 * Created by Yohan on 2016-03-25.
 */
var http = require('http');
var employeeService = require('./lib/employees');
var responder = require('./lib/responseGenerator');
var staticFile = responder.staticFile('/public');

http.createServer(function (req, res){

    var _url;   //인자를 파싱한 url

    req.method = req.method.toUpperCase();
    console.log(req.method + ''+ req.url);
    //res.end('The current time is' + Date.now());

    if(req.method !== 'GET') {
        res.writeHead(501, {
           'Content-Type': 'text/plain'
        });
        return res.end(req.method+'is not implemented by this server. ');

    }


    if(_url = /^\/employees$/i.exec(req.url)){
        //직원목록 반환
        //res.writeHead(200);
        //return res.end('employee list');
        employeeService.getEmployees(function(error, data){
            if(error){
                return responder.send500(error,res);
            }
            return responder.sendJson(data, res);
        });
    }else if(_url = /^\/employees\/(\d+)$/i.exec(req.url)) {     //라우트에 포함된 id 로 직원 검색
        employeeService.getEmployee(_url[1],function(error, data){
            if(error){
                return responder.send500(error,res);
            }

            if (!data){
                return responder.send404(res);
            }

            return responder.sendJson(data,res);
        });


        //res.writeHead(200);
       // return res.end ('a single employee');

    }else {
        //res.writeHead(200);
        //res.end('static file maybe');
    }
}).listen(1337, '127.0.0.1');
/**
 * Created by Yohan on 2016-03-25.
 */




/**
 * res.end 는 응답의 끝을 의미하며, 들어오는 요청에 대해 응답을 전송하는 역할을 담당.
 */
console.log('Server running at http');