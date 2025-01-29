const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set response status code
    res.setHeader('Content-Type', 'text/plain'); // Set response content type
    res.end('Hello World\n'); // Send response
});

const PORT = 3000; // Define the port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
