const express = require('express')
const socketIo = require('socket.io')
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = socketIo(server,{
    cors:{
        origin: '*',
        methods: ["GET", "POST"],
        credentials: true
    }
})

const usersId = {};

const socketToRoom = {};
io.on('connection',(socket) =>{
    console.log('We have a new connection')
    socket.on('join',({name,room},callback) => {
        const {error,user} = addUser({id : socket.id,name,room})
        if (usersId[room]) {
            const length = usersId[room].length;
            if (length === 4) {
                socket.emit("room full");
                return;
            }
            usersId[room].push(socket.id);
        } else {
            usersId[room] = [socket.id];
        }
        console.log(usersId[room])

        socketToRoom[socket.id] = room;
        const usersInThisRoom = usersId[room].filter(id => id !== socket.id);

        socket.emit("all users", usersInThisRoom);
        io.to(user.room).emit('roomData',{room: user.room,users: getUsersinRoom(user.room)})
        callback()
    });

    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
    });

    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
    });

    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id];
        let room = usersId[roomID];
        
        if (room) {
            room = room.filter(id => id !== socket.id);
            usersId[roomID] = room;
        }
    });
})
app.get('/',(req,res) => {
    res.send('<h1>Hello World</h1>')
})
app.use(cors())

const PORT = process.env.PORT || 5000 

server.listen(PORT,() =>{
    console.log('SERVER')
})