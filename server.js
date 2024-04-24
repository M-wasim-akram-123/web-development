// Import required modules
const http = require('http');

// Define port number
const PORT = process.env.PORT || 3000;
// Create HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response
  res.end('Hello, World!\n');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
