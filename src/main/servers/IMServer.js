import { fork } from 'child_process'
import path from 'path'
export default class IMServer {
  constructor () {
    // console.log(NODE.env)
    this.child = null
    this.ip = null
    this.port = null
    this.status = false
  }

  start (ip, port) {
    if (!this.status) {
      this.child = fork(path.join(process.env.ENTENSIONS, 'communicationServer'))
      this.ip = ip
      this.port = port
      this.status = true
      return true
    } else {
      return false
    }
  }
  stop () {
    if (this.status) {
      // 关闭express进程
      return true
    } else {
      return false
    }
  }
  getStatus () {
    return this.status
  }
  getAddress () {
    return this.ip + ':' + this.port + ''
  }
}
