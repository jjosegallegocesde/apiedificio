import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Gasto=new Schema({

    fecha:{
        type:Date,
        required:true
    },
    valor:{
        type:Number,
        required:true
    },
    Descripcion:{
        type:String,
        required:true
    }


})

export const modeloGasto = mongoose.model('gasto', Gasto);