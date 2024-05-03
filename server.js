// Import required modules
const http = require('http');
// Import required modules
const express = require('express');
require('./dbConn')
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

 app.post('/addUser',(req,res)=>{
  const obj = req.body;
  res.send({success:true,data:obj})
 })
// Start the server
server.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
});
