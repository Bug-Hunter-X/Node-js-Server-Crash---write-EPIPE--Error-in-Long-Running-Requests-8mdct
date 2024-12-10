# Node.js Server Crash: 'write EPIPE' Error in Long-Running Requests

This repository demonstrates a rare but frustrating error in Node.js servers: the 'write EPIPE' error (or similar, depending on the OS and Node.js version).  This occurs when a request takes longer to process than the server's lifetime, leading to a crash after the connection is closed.

## Problem

The `bug.js` file contains a simple HTTP server that simulates a long-running request. If the request isn't completed and the response is not sent before the server process exits (e.g., due to a timeout or termination), it results in a crash with an 'write EPIPE' error.

## Solution

The `bugSolution.js` file provides a solution by using event listeners to handle potential errors more gracefully. This example uses the 'close' event on the response object. This ensures a clean exit even if the request takes longer than expected and prevents the EPIPE error.

## How to reproduce

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` and send multiple requests to `http://localhost:3000/`.
4. Observe the server crash after some requests (the timeout is 5 seconds in `bug.js`).
5. Then run `node bugSolution.js` and test again.  It should handle requests more reliably.

## Contributing

Contributions are welcome!