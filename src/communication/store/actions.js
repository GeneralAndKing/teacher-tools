import $socket from 'communication@/lib/socket-instance'
const actions = {
  socket_connect: (commit) => {
    $socket.emit('online')
  }
}

export default actions
