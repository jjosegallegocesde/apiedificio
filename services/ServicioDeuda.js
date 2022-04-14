import {modeloDeuda} from '../models/Deuda.js'
import {modeloDeudaGeneral} from '../models/DeudaGeneral.js'

export class ServicioDeuda{


    constructor(){}


    async buscar(){
       let deudas=await modeloDeuda.find()
       return deudas
    }

    async insertar(deuda){
        let deudaNuevo= new modeloDeuda(deuda)
        return await deudaNuevo.save()
    }

    async editar(id,deuda){
        return await modeloDeuda.findByIdAndUpdate(id,deuda)
    }

    async buscarPorIdGeneral(id){
        let deuda= await modeloDeudaGeneral.findById(id)
        return deuda
    }

    async insertarGeneral(deuda){
        let deudaNuevo= new modeloDeudaGeneral(deuda)
        return await deudaNuevo.save()
    }

    async editarGeneral(id,deuda){
        return await modeloDeudaGeneral.findByIdAndUpdate(id,deuda)
    }


}