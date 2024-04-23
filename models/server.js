//progama la estructura y manejador de la clase

const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express()
        this.port = 3000
        this.userPath = '/api/users'
        this.middleware()
        this.routes()
    }

    middleware(){
        this.app.use(cors())   //peticion por web
        this.app.use(express.json()) // sirve para que reconosta el formato json
    }

    routes(){
        this.app.use(this.userPath, require('../routes/users.route'))
        this.app.use("api/prodPath", require('../routes/users.route'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor ON', this.port)
        })
    }

}

module.exports = Server