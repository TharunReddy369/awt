var http = require('http')
var express = require('express')
var jwt = require("jsonwebtoken")
var app = express()
var cors = require('cors')

const { verify } = require("jsonwebtoken") 
var mongoClient = require('mongodb').MongoClient
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        console.log("Error", err)
    }
    else{
        console.log("Connection is established")
        db = client.db('student')
    }
})

// app.get('/emps',(req,res)=>{
//     res.setHeader("content-type","application/json")
//    db.collection('emp').find().toArray((err,items)=>{
//        console.log(items)
//        res.write(JSON.stringify(items))
//        res.end()
//     })
// })

app.listen(2000,()=>{
    console.log("Server Started")
})

// app.post("/addemp",(req,res)=>{
//     res.setHeader("content-type","application/json")
//     console.log(req.body)
//     db.collection('emp').insertOne(req.body)
//     res.end("inserted")
// })

// app.delete("/deleteemp/:id",(req,res)=>{
//     res.setHeader("content-type","application/json")
//     console.log(req.body)
//     var id = (req.params.id)
//     db.collection("emp").deleteOne({"_id":id})
//     res.end("deleted")
// })

// app.put("/updateemp/:id",(req,res)=>{
//     console.log(req.body.name)
//     res.setHeader("content-type","application/json")
//     var id =req.params.id
//     console.log(id)
//     db.collection("emp").updateOne({"_id":id},{$set:{name:req.body.name}})
//     res.end()
// })

// app.get("/getemp/:id",(req,res)=>{
//     var id = parseInt(req.params.id)
//     db.collection('emp').find({"_id":id}).toArray((err,items)=>{
//         console.log(items)
//         res.write(JSON.stringify(items))                
//         res.end()
// })
// })

// app.post('/addstudent',(req,res)=>{
//     res.send("adding post")
// })

app.get("/",verifyToken,(req,res)=>{
    res.send("this is testing page")
})

app.post('/login',(req,res)=>{
    db = client.db('student')

    uname = req.body.username
    pwd = req.body.password
    db.collection('users').findOne({"username":uname,"password":pwd}).then((result)=>{
        if(result){
            const token = jwt.sign({"username":uname},"cvrcollege")
            res.json({
                success:true,
                message:"Authentication Successful",
                token:token
            })
            res.end()
        }
        else{
            res.json({
                success:false,
                message:"No username and password"
            })
            res.end()
        }
    })
})


function verifyToken(req,res,next){
    let token = req.headers['authorization']
    if(token){
        token = token.split(" ")[1]
        console.log(token)
        jwt.verify(token,"cvrcollege",(err,decoded)=>{
            if(err){
                return res.json({
                    success:false,
                    message:"token is not valid"
                })
            }
            else{
                next();
            }
        })
    }
    else{
        return res.json({
            success:"false",
            message:"a token is required for authentication"
        })
    }
}