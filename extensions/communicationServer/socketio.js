const socketIO = require('socket.io')
let socketio = {}
let clientCount = 0
// 获取io
socketio.getSocketio = function (server) { // http(s) server
  let io = socketIO.listen(server)
  io.sockets.on('connection', function (socket) {
    console.log('连接成功')
    socket.on('sendRadio', function (blob) {
      console.log(blob)
      socket.emit('receiRadio', blob)
    })

    socket.on('online', function (data) {
      // 当前在线人数加一
      clientCount++
      // 广播当前在线人数
      io.emit('clientCount', clientCount)

      socket.username = data
      // 给所有client广播消息（包括当前socket本身）
      io.emit('online', data)
      console.log('user : ' + socket.username + ' connected!')
    })
    // 接收用户发送的消息
    socket.on('sendMessage', function (msg) {
      // 广播接收到的消息
      io.emit('receiveMessage', msg)
    })
    // 监听用户断开连接
    socket.on('disconnect', function () {
      // 当前用户减一
      clientCount--
      // 广播当前用户人数
      io.emit('clientCount', clientCount)
      // 广播用户断开下线
      socket.broadcast.emit('offline', socket.username)
      console.log(socket.username + ' 下线了~')
    })

    socket.on('online', function (data) {
      // 当前在线人数加一
      clientCount++
      // 广播当前在线人数
      io.emit('clientCount', clientCount)
      socket.username = data
      // 给所有client广播消息（包括当前socket本身）
      io.emit('online', data)
      console.log('user : ' + socket.username + ' connected!')
    })
    // 接收用户发送的消息
    socket.on('sendMessage', function (msg) {
      // 广播接收到的消息
      io.emit('receiveMessage', msg)
    })
    // 监听用户断开连接
    socket.on('disconnect', function () {
      // 当前用户减一
      clientCount--
      // 广播当前用户人数
      io.emit('clientCount', clientCount)
      // 广播用户断开下线
      socket.broadcast.emit('offline', socket.username)
      console.log(socket.username + ' 下线了~')
    })
  })
}

module.exports = socketio
