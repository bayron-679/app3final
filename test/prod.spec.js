const request = require('supertest')
const Server = require('../models/server')
const server = new Server()

const token = "12345"
const datosproducto = {nombre:"tornillos",cantidad:"123"}
const datoslogin = {usuario:"Bayron1",contraseña:"1234"}
const prodid=2
const datopr = {descripcion:"herragro #20"}
const datos_tabla = {nombre:"usuario login"}

describe('GET /api/users',() => {

    test('respuesta codigo 200', async () =>{

        const response = await request(server.app)
        .get('/api/users')
        .send()
        expect(response.statusCode).toBe(200)
    })
})

describe("post /api/users",()=>{

    test("crear producto martillo", async()=>{

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send(datosproducto)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            datosproducto.nombre=body.nombre
        })
    })
})

describe("put /api/users/:id",()=>{

    test("Actualizacion de producto", async()=>{
        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send(datosproducto)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.prodid)
        })
    })
})

describe("get /api/users",()=>{
    test("Ver id del producto actualizado", async()=>{
        return request(server.app)
        .get('/api/users')
        expect('Content-type',/json/)
        expect(201)
        .then(({body})=>{
            console.log(body.prodid)
        })
    })
})

describe("Delete /api/users/:id",()=>{

    test("Eliminacion de producto martillo", async()=>{
        return request(server.app)
        .delete('/api/users/${prodid,datosproducto}')
        .set('Authorization','Bearer'+token)
        .expect(410)
    })
})

describe("post /api/users",()=>{

    test("crear descripcion a producto existente", async()=>{

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send(datopr)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            //datopr.descripcion=body.descripcion
            console.log(body.id)
        })
    })
})

describe("put /api/users/:descripcion",()=>{

    test("Actualizacion de descripcion", async()=>{
        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send(datopr)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.descripcion)
        })
    })
})

describe("get /api/users/:id1",()=>{
    test("ver cantidad producto", async()=>{
        return request(server.app)
        .get('/api/users/id1')
        expect('Content-type',/json/)
        expect(201)
        .then(({body})=>{
            console.log(body.cantidad)
            
        })
    })
})


describe("post /api/users",()=>{

    test("crear datos de login", async()=>{

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send(datoslogin)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            datoslogin.usuario=body.usuario
        })
    })
})

describe("post /api/users",()=>{

    test("Crear tabla", async()=>{
        
        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send(datos_tabla)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            datos_tabla.nombre=body.nombre
            
        })
    })
})

describe("patch /api/users/:id",()=>{

    test("Actualizacion nombre de tabla", async()=>{
        return request(server.app)
        .patch('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send(datos_tabla)
        expect('Content-type',/json/)
        expect(201)
        .then(({body})=>{
            console.log(body.ustabla)
        })
    })
})

describe("Delete /api/users/:tabla",()=>{

    const ustabla=1

    test("Eliminacion de tabla", async()=>{
        return request(server.app)
        .delete('/api/users/${ustabla}')
        .set('Authorization','Bearer'+token)
        .expect(410)
    })
})