const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hola mundo\n');
    }
});

server.listen(3000);
console.log('Listening on port 3000...');