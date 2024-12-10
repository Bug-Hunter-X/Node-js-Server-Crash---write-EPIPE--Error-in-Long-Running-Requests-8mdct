const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process
  // and the response is not sent before the process exits.
  // The error message may vary depending on the operating system and Node.js version
  // Example: "Error: write EPIPE"
  // or "Error: write after end"

  // Simulate a long-running process
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Wait for 5 seconds
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});