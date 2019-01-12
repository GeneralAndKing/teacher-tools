const express = require('express')
const path = require('path')
const routes = require('./routes')
export default class IMServer {
  constructor () {
    // console.log(NODE.env)
    this.app = require('../express')
    this.http = require('http')
    this.ip = null
    this.port = null
    this.stream = null
    this.status = false
  }
  // 注入getScreen 返回video
  injection () {
    this.router.get('/getScreen', function (req, res, next) {
      res.send(this.stream)
    })
    this.app.set('port', this.port)
    this.app.use(express.static(path.join('.', '/dist/web')))
    this.app.use('/', routes)
  }

  start (ip, port, stream) {
    if (!this.status) {
      this.ip = ip
      this.port = port
      this.stream = stream
      this.injection()
      this.server = this.http.createServer(this.app)
      this.server.listen(this.port)
      this.status = true
      return true
    } else {
      return false
    }
  }
  stop () {
    if (this.status) {
      this.server.close()
      this.status = false
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
