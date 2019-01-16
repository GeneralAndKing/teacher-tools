import $socket from 'communication@/lib/socket-instance'
const actions = {
  socket_connect: ({ commit }) => {
    $socket.emit('online', {
      username: 'teacher'
    })
  },
  socket_receiveMessage: ({ commit, dispatch }, data) => {
    commit('RECEIVE_MESSAGE', data)
  },
  socket_clientCount: ({ commit }, value) => {
    commit('CLIENT_COUNT', value)
  }
}

export default actions
