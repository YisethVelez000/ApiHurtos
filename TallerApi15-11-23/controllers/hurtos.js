const  {response} =require('express');
const asyc=  requiere('hbs/lib/async')

Hurto = require('../models/hurtos')

const getHurtos = async(req, res) =>{


    const hurtos = await Hurto.find();//obteniendo los datos de la coleccion
     res.json({
        msg: hurtos
     })

}
const postHurtos = async(req, res) => {
    const datos= req.query //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const hurto = new Hurto(datos)//instaciar el objeto
        await hurto.save()//guardar la base de datos
        console.log(hurto)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putHurtos = async(req, res) =>{

try{
        const hurto = await Hurto.findOneAndUpdate({tipoHurto:tipoHurto},{direccion:direccion,fecha:fecha,descripcion:descripcion,ciudad:ciudad})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
        const { tipoHurto,direccion,fecha,descripcion,ciudad}=req.query //desestructurar
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteHurtos = async(req, res) =>{

    try{
            const hurto = await Hurto.findOneAndUpdate({tipoHurto:tipoHurto})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            const { tipoHurto,direccion,fecha,descripcion,ciudad,rol,estado}=req.query //desestructurar
            mensaje = 'Eliminacion Exitosa'
            
        }catch(error){
            mensaje=error
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getHurtos,
    postHurtos,
    putHurtos,
    deleteHurtos

}
