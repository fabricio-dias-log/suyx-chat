const http = require('http');
const port = 3030;

const express = require('express');
const app = express();

const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer);

app.use(express.static('./public'))
httpServer.listen(port)

io.addListener('connection', () => {
    console.log('connected');
})

// app.get('/', (req, res) => res.send('Hello World!'))