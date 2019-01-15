import $socket from 'communication@/lib/socket-instance'
const actions = {
  socket_connect: (commit) => {
    $socket.emit('online', {
      username: 'teacher'
    })
  }
}

export default actions
