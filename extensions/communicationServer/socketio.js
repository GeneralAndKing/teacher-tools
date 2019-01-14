
const socketIO = require('socket.io')
let socketio = {}

// 获取io

socketio.getSocketio = function (server) { // http(s) server
  let io = socketIO.listen(server)

  io.sockets.on('connection', function (socket) {
    console.log('连接成功')
    socket.on('voice', function (blob) {
      // can choose to broadcast it to whoever you want
      socket.broadcast.emit('voice', blob)
    })
  })
}

module.exports = socketio
