const{application}=require("express")
var express=require("express")

var app=express()
app.use(express.json())

const students=[
    {"id":1,
    "name":"Tharun"
    },
    {
        "id":2,
        "name":"arun"
    }
]
app.get("/",(req,res)=>{
    res.write("inside get");
    res.write("hello world");
    res.end()
})
app.get("/getstudents",(req,res)=>{
    res.write(JSON.stringify(students));
    
    res.end()
})
app.post("/addstudents",function(req,res){
    students.push(req.body)
    res.write("students added sucesfully")
    res.end();
})
app.delete("/deletestudent/:id",function(req,res){
    id=req.params.id;
    for(var i=0;i<students.length;i++){
        if(id==students[i].id){
            students.splice(i,1);
        }
        res.write("deleted successfully");
        res.end();
    }
   
})
app.put("/updatestudent/:id",function(req,res){
    id=req.params.id;
    
    for(var i=0;i<students.length;i++){
        if(id==students[i].id){
            students[i].name=req.body.name;
        }
      
        res.end();
    }
})
app.listen(2000,()=>{
    console.log("server started");
})