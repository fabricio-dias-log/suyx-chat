const http = require('http');
const port = 3030;

const express = require('express');
const app = express();

const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer);

app.use(express.static('./public'))
httpServer.listen(port)
// httpServer.listen(port, (ipv4)) - para configurar na rede e poder ser usado por usuários da rede

io.addListener('connection', (socket) => {
    console.log('connected');
    socket.addListener('Nova mensagem', (msg) => {
        io.emit('Nova mensagem', msg);
    })
})

// app.get('/', (req, res) => res.send('Hello World!'))