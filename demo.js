var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        fs.readFile("sample.txt",function(err,data){
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/home'){
        fs.readFile("home.txt",function(err,data){
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/admin'){
        fs.readFile("admin.txt",function(err,data){
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/student'){
        fs.readFile("student.txt",function(err,data){
            res.write(data);
            res.end();
        })
    }

})
server.listen(2000);
console.log("server started")