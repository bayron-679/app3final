const {response, request} = require('express')

const viewUsers = (req = request, res = response) => {
    res.json({'msg':'exito'})
}



const usuariosPos = (req, res = response) => {

    const{nombre, edad}=req.body

    res.status(201).json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    })
}

const usuariosPut = (req, res=response)=>{
    const {id}=req.params
    res.status(201).json({
        msg:'put API - usuariosPut',
        id
    })
}



const usuariosDelete = (req, res=response)=>{
    const {id}=req.params
    res.status(410).json({
        msg:'delete API - usuariosDelete',
        id
    })
}





module.exports = {viewUsers, usuariosPos,usuariosPut,usuariosDelete}