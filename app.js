require('dotenv').config(); //importa libreria dotenv que sirve para usar archivoas .nv

const Server = require('./models/server')
const server = new Server()

server.listen()