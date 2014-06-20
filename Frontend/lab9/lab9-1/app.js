var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

server.listen(8585);

app.use(express.static(__dirname));

//Ruta(s) que se manejaran
app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

//variables 'usernames' para los usuarios conectados
var usernames = {};

io.sockets.on('connection', function(socket){
    //Cuando el cliente, browser, emite el evento 'sendchat', este debe escuchar y ejecutar

    socket.on('sendchat', function(data){
        //le enviamos 'emit' al cliente que ejecute 'updatechat' con dos parámetros 'socket.username' y 'data'
        io.sockets.emit('updatechat', socket.username, data);
    });
    //cuando el cliente emite un evento 'adduser', este escucha y ejecuta
    socket.on('adduser', function(username){
        //almacenamiento del nombre de usuario en la sesión de toma de info del cliente
        socket.username = username;
        //adicionamos el usuario 'socket.username' al objeto 'usernames'
        usernames[username] = username;
        //enviamos al cliente el objeto con las listas de usuarios en el objeto 'usernames'
        socket.broadcast.emit('updatechat', 'SERVER', username + ' Esta conectado');

        //enviamos petición al mismo cliente de la petición con la conexión de el mismo
        socket.emit('updatechat', 'SERVER', 'Usted esta conectado');
        //actualizamos la lista de usuarios en el chat, en el cliente
        io.sockets.emit('updateusers', usernames);
    });

    //cuando el usuario se desconecta
    socket.on('disconnect', function(){
        delete usernames[socket.username];
        //actualizamos la de usuarios en el cliente
        io.sockets.emit('updateusers', usernames);
        //envio global de la actualización de la lista de clientes conectados
        socket.broadcast.emit('updatechat', 'SERVER', socket.username + 'Esta desconectado');
    });
});