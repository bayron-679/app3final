const request = require('supertest')
const Server = require('../models/server')
const server = new Server()

const token = "12345"
const datosprueba = {nombre:"Bayron",
edad:"25"}
const userid=1

describe('GET /api/users',() => {

    test('respuesta codigo 200', async () =>{

        const response = await request(server.app).get('/api/users').send()
        expect(response.statusCode).toBe(200)
    })
})



describe("post /api/users",()=>{

    test("Crear usuario", async()=>{

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send(datosprueba)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre=body.nombre
            
        })
    })

    test ("Se puede crear usuario",async()=>{
        return request(server.app)
        .post('/api/users')
        .send(datosprueba)
        .expect(201)
    })
})

describe("put /api/users/:id",()=>{

    test("Actualizacion de usuario", async()=>{
        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send(datosprueba)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        })
    })

})

describe("Delete /api/users/:id",()=>{

    test("Eliminacion de usuario", async()=>{
        return request(server.app)
        .delete('/api/users/${userid}')
        .set('Authorization','Bearer'+token)
        .expect(410)
    })
})