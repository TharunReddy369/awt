var express=require('express')
var firebase=require('firebase')
var app=express()
app.use(express.json())
app.listen(2000,()=>{
    console.log("server started")
})
const firebaseConfig = {
    apiKey: "AIzaSyBoG2cRKMkm6IZLZlfzbtP4xvmFxfG8s-M",
    authDomain: "awtproject-62b1b.firebaseapp.com",
    databaseURL: "https://awtproject-62b1b-default-rtdb.firebaseio.com",
    projectId: "awtproject-62b1b",
    storageBucket: "awtproject-62b1b.appspot.com",
    messagingSenderId: "935791846950",
    appId: "1:935791846950:web:dfac18c3e4cec04706e8e7",
    measurementId: "G-5DR01D92SF"
  };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  firebase.initializeApp(firebaseConfig)
  dbref=firebase.database().ref("student")
  app.get("/stu",(req,res)=>{
      dbref.on('value',(snap)=>{
          res.send(snap.val())
      })
  })
  app.post("/addstu",(req,res)=>{
      stu={
          "id":1,
          "name":"Tharun"
      }
      dbref.child(stu.id).set(stu,(data)=>{
          res.send("inserted")
      })
  })
  app.delete("/del/:id",(req,res)=>{
      var id=req.params.id
      dbref.child(id).remove()
      res.send("deleted")
  })
  app.put("/update/:id",(req,res)=>{
      var id=req.params.id
      console.log(req.body)
      dbref.child(id).update({
            "name":"chinnu"
      })
      res.send("updated")
  })
  app.post("/addStudent",(req,res)=>{
      dbref.child(req.body.id).set(req.body,(data)=>{
          res.send("inserted")
      })
  })