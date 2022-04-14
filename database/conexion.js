import mongoose from 'mongoose';

export async function establecerConexion(){

    try{

        await mongoose.connect(process.env.DATA_BASE);
        console.log("Exito conectandonos con BD")


    }catch(error){

        console.log("Fallo en conexion con BD: "+error)

    }

}