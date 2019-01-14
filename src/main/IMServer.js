// import { fork } from 'child_process'
// export default class IMServer {
//   constructor () {
//     // console.log(NODE.env)
//     this.child = null
//     this.ip = null
//     this.port = null
//     this.status = false
//   }

//   start (ip, port, publicPath) {
//     if (!this.status) {
//       this.child = fork()
//       this.ip = ip
//       this.port = port
//       this.status = true
//       return true
//     } else {
//       return false
//     }
//   }
//   stop () {
//     if (this.status) {
//       // 关闭express进程
//       return true
//     } else {
//       return false
//     }
//   }
//   getStatus () {
//     return this.status
//   }
//   getAddress () {
//     return this.ip + ':' + this.port + ''
//   }
// }
