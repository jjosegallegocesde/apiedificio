import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Usuario=new Schema({

    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true
    }


})

export const modeloUsuario = mongoose.model('usuario', Usuario);