const {response, request} = require('express')

const viewUsers = (req = request, res = response) => {
    res.json({'msg':'exito'})
}

const crearproductoPost = (req, res = response) => {

    const{nombre, cantidad}=req.body

    res.status(201).json({
        msg: 'post API - crearproductoPost',
        nombre,
        cantidad
    })
}

const actuproductoPut = (req, res=response)=>{
    const {idprod}=req.params
    res.status(201).json({
        msg:'put API - actuproductoPut',
        idprod
    })
}

const verproductosactuaGet = (req, res=response)=>{
    const {idprod}=req.params
    res.status(201).json({
        msg:'get API - verproductosactuaGet',
        idprod
    })
}
const productoDelete = (req, res=response)=>{
    const {idprod}=req.params
    res.status(410).json({
        msg:'delete API - productoDelete',
        idprod
    })
}
const creardescriproductoPost = (req, res = response) => {

    const{descripcion}=req.body

    res.status(201).json({
        msg: 'post API - creardescriproductoPost',
        descripcion
    })
}

const actudescriproductoPut = (req, res=response)=>{
    const {desc1}=req.params
    res.status(201).json({
        msg:'put API - actudescriproductoPut',
        desc1
    })
}

const vercantiproductoGet = (req, res=response)=>{
    const {id1}=req.params
    res.status(201).json({
        msg:'get API - vercantiproductoGet',
        id1
    })
}


const creardatosloginPost = (req, res = response) => {

    const{usuario, contraseña}=req.body

    res.status(201).json({
        msg: 'post API - creardatosloginPost',
        usuario,
        contraseña
    })
}

const usuarios_tablaPos = (req, res = response) => {

    const{nombre}=req.body

    res.status(201).json({
        msg: 'post API - usuarios_tablaPos',
        nombre
    })
}

const actunombtablapatch = (req, res=response)=>{
    const {tabla}=req.params
    res.status(201).json({
        msg:'patch API - actunombtablapatch',
        tabla
    })
}

const tablaDelete = (req, res=response)=>{
    const {tabla}=req.params
    res.status(410).json({
        msg:'delete API - tablaDelete',
        tabla
    })
}

module.exports = {viewUsers,crearproductoPost,actuproductoPut,verproductosactuaGet,productoDelete,creardescriproductoPost,
    actudescriproductoPut,vercantiproductoGet,creardatosloginPost,usuarios_tablaPos,actunombtablapatch,tablaDelete}