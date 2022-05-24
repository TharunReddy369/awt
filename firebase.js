const{application}=require("express")
var express=require("express")
var firebase=require("firebase")
var app=express()
app.use(express.json())
const firebaseConfig = {
    apiKey: "AIzaSyBoG2cRKMkm6IZLZlfzbtP4xvmFxfG8s-M",
    authDomain: "awtproject-62b1b.firebaseapp.com",
    projectId: "awtproject-62b1b",
    storageBucket: "awtproject-62b1b.appspot.com",
    messagingSenderId: "935791846950",
    appId: "1:935791846950:web:dfac18c3e4cec04706e8e7",
    measurementId: "G-5DR01D92SF"
  };
  
  firebase.initializeApp(firebaseConfig)
  var dbRef=firebase.database().ref("students")
  app.get("/students",(req,res)=>{
      dbRef.on('value',(snap)=>{
          res.send(snap.val());
          res.end();
      })
      
  })
app.post("/addstudents",(req,res)=>{
    stu={
        "id":"102",
        "name":"A"
    }
    dbRef.child(stu.id).set(stu,(data)=>{
        res.send("inserted")
    })
})
  app.listen(1000,()=>{
      console.log("server started")
  })
  