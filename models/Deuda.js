import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Deuda=new Schema({

    fecha:{
        type:Date,
        required:true
    },
    valor:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String
    }


})

export const modeloDeuda = mongoose.model('deuda', Deuda);