import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DeudaGeneral=new Schema({

    fecha:{
        type:Date,
        required:true
    },
    valor:{
        type:Number,
        required:true
    },
    

})

export const modeloDeudaGeneral = mongoose.model('deudageneral', DeudaGeneral);