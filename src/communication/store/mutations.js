
const mutations = {
  SOCKET_CONNECT: (state) => {
    state.online = true
  },
  RECEIVE_MESSAGE (state, data) {
    state.contents.push(data)
  },
  CLIENT_COUNT: (state, value) => {
    state.clientCount = value
  },
  CLEAN_CONTENTS: (state) => {
    state.contents = []
  }
}

export default mutations
