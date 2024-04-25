// Import required modules
const http = require('http');
// Import required modules
const express = require('express');

// Create an Express application
const app = express();
// Define port number
const PORT = process.env.PORT || 3000;
// Create HTTP server
const server = http.Server(app);
app.get('/helloWorld',(req,res)=>{
 res.send("hello world")
})
app.get('/',(req,res)=>{
  res.send("base path")
 })
 app.get('/test',(req,res)=>{


  
  res.send("base path test url")
 })
// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
