const{Shema, model}= require('mongoose')

const HurtoShema=({
    tipoHurto:{
        type: String,
        unique:true,
        required:[true, 'El tipo de hurto es requerido'],
        enum:['arma_blanca','arama_fuego','drogado']

    },

    direccion:{
        type:String,
        required:[true, 'El password debe contener minimo 4 caracteres'],
        min:[10, 'El password debe contener maximo 1o caracteres'],
        max:[10, 'El password debe contener maximo 1o caracteres']
    },
    fecha:{
        type:Date,
        format: 'YYYY-MM-DD',
        required:[true, 'La fecha es requerida'],
       
    },
    descripcion:{
        type:String,
        required:[true, 'La descripcion es requerida'],
      
    },
    ciudad:{
        type:String,
        required:[true, 'La ciudad es requerida'],


        
    }



})
//expesificando la estructura que va  a tener la conexion
module.exports = model('Hurto', HurtoShema)