const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const router = require('./router');

const app = express();

var port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Listening on: ${port}`);
});
io = socketio(server, { origins: '*:*' })




// Saw on internet that for Access-Control-Allow-Origin error add this
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());
app.use(router);


io.on('connect', (socket) => {


    socket.on('join', (({ name, room }) => {

        // these two console logs should come up here in server side
        console.log('Loged in');
        console.log(name, room);
    }))


    socket.on('disconnect', () => {
        console.log("disconnect");
        const user = removeUser(socket.id)
    })

})
