const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running process
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Wait for 5 seconds

  //Handle potential errors gracefully
  res.on('close', () => {
    console.log('Client connection closed prematurely.');
  });
  res.on('error', (err) => {
    console.error('Error writing to client:', err);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});