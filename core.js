var http=require('http');
var server=http.createServer(function(req,res){
   console.log("first page");
   res.write("Hello world");
   res.end()
})
server.listen(1000);
    