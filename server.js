// Import required modules
const http = require('http');
// Import required modules
const express = require('express');
require('./dbConn');
const UserModel = require('./userModel');
// Create an Express application
const app = express();
app.use(express.json()); // This parses incoming JSON requests

// Define port number
const PORT = 3000;
// Create HTTP server
const server = http.Server(app);
app.get('/helloWorld',(req,res)=>{
  let evenNumber = [];

  for(let i=0;i <20; i++){
    if(i % 2 == 0){
      evenNumber.push(i);
    }
  }
  
 res.send(evenNumber)
});
app.get('/',(req,res)=>{
  res.send("base path")
 })
 app.get('/test',(req,res)=>{


  
  res.send("base path test url")
 });

 app.post('/addUser',async(req,res)=>{
  try {
    const obj = req.body;
    console.log(UserModel)
   
    let result  = new UserModel(obj);
    let user = await result.save();
   
     //data base 
     //store in db
     //
     res.send({success:true,data:user})
  } catch (error) {
    console.log(error);
    res.send({success:false,error:error})
  }
 })
// Start the server
server.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
});
