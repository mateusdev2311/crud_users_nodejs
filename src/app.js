const express = require('express')
const routes = require('./routes')

class App {
  constructor() {
    this.server = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    this.server.use(express.json())
  }
  routes() {
    this.server.use(routes)
  }
}
const app = new App()
module.exports = app.server