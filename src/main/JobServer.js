// import { fork } from 'child_process'
// import path from 'path'
// export default class JobServer {
//   constructor (closeCallBack, compressCallBack) {
//     // console.log(NODE.env)
//     // this.app = cp.fork(path.join(__static, 'app'), [], { env: process.env })
//     console.log(this.app)
//     this.app = require('./app')
//     this.http = require('http')
//     this.ip = null
//     this.port = null
//     this.status = false
//     this.monitor = null
//     this.closeCallBack = closeCallBack
//     this.jobName = null
//     this.className = null
//     this.compressCallBack = compressCallBack
//     this.timestamp = null
//   }
//   start (ip, port, time, jobName, className, timestamp) {
//     if (!this.status) {
//       this.jobName = jobName
//       this.className = className
//       this.timestamp = timestamp
//       this.ip = ip
//       this.port = port
//       this.time = time * 60 * 1000
//       this.app.set('port', this.port)
//       this.server = this.http.createServer(this.app)
//       this.server.listen(this.port)
//       this.monitor = setTimeout(this.closeCallBack, this.time)
//       this.status = true
//       return true
//     } else {
//       return false
//     }
//   }
//   stop () {
//     if (this.status) {
//       this.server.close()
//       clearTimeout(this.monitor)
//       this.status = false
//       this.compressCallBack(this.jobName, this.className)
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
//   getJobName () {
//     return this.jobName
//   }
//   getClassName () {
//     return this.className
//   }
//   getTimestamp () {
//     return this.timestamp
//   }
//   getTime () {
//     return this.time
//   }
// }
