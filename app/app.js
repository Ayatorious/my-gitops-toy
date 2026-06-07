const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from my first container! v1\n');
});

server.listen(8080, () => {
  console.log('Server starting on :8080');
});
const broken = (
