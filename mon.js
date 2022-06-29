var express =require("express");

var mongoClient=require("mongoDB").MongoClient

var app=express()
app.use(express.json())

mongoClient.connect("mongodb://localhost:27017",(err,client)=>{
    if(!err){
        console.log("Connection Successful...")
        db=client.db("student");
    }
    else{
        console.log("Connection is not established...");

    }
})
app.listen(2000,()=>{
    console.log("Server started...")
})


app.get("/stud",(req,res)=>{
    db.collection('awtlab').find().toArray((err,items)=>{
       
        console.log(items)
        res.write(JSON.stringify(items))
        res.end()
    })
})
app.post("/addstud",(req,res)=>{
    console.log(req.body)
    db.collection('awtlab').insertOne(req.body)
    res.end()
})