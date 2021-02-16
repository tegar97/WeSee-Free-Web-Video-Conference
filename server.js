const express = require('express')
const socketIo = require('socket.io')

const http = require('http');
const cors = require('cors');
const { addUser ,removeUser,getUser,getUsersinRoom} = require('./users');
const app = express();
const server = http.createServer(app);
require('dotenv').config()

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
    socket.on('join',({name,room},callback) => {
        const {error,user} = addUser({id : socket.id,name,room})
        if(error) return callback(error)
        
        // ADD ID FOR PEER
        if (usersId[room]) {
            const length = usersId[room].length;
            if (length === 4) {
                socket.emit("room full");
                return;
            }
            usersId[room].push(socket.id);
            
        } else {
            console.log(usersId[room])

            usersId[room] = [socket.id]

        }
        console.log(usersId[room])

        socketToRoom[socket.id] = room;
    
        const usersInThisRoom = usersId[room].filter(id => id !== socket.id);
        const users = getUsersinRoom(user.room).filter(user => user.id !== socket.id)

        console.log('hey',users)
        console.log('users in room',users)
   
        
        socket.emit("all users", {userId : usersInThisRoom, usersData : users});


        socket.emit('message',{user: 'system',text: `${user.name},welcome to the room`})
        socket.broadcast.to(user.room).emit('message',{user : 'system',text : `${user.name},has joined!`})
        socket.join(user.room);
        io.to(user.room).emit('roomData',{room: user.room,users: getUsersinRoom(user.room)})
      




        callback()
    });
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
    
        io.to(user.room).emit('message', { user: user.name, text: message });
    
        callback();
      });
    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
    });

    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        console.log(user)
        if(user) {
            io.to(user.room).emit('message',{user: 'system',text: `${user.name} has left`})
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersinRoom(user.room)});

        }
        const roomID = socketToRoom[socket.id];
        let room = usersId[roomID];
        if (room) {
            room = room.filter(id => id !== socket.id);
            
            usersId[roomID] = room;
            console.log(usersId)
            
        }
        
        socket.broadcast.emit('user left',socket.id);

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