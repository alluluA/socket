const express = require("express");
const app = express();
const server = app.listen(8000, () =>{
    console.log("The server is all fired up on port 8000")
});

const socketIo = require("socket.io");
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
});

io.on("connection", socket =>{
    io.emit('event', 'hello!!')
    console.log(socket.id);
    console.log("Nice to meet you. (shake hand)");
    socket.on('event', data =>{
        socket.emit("Welcome!!");
        socket.broadcast.emit('broadcast ', data);
    })
})