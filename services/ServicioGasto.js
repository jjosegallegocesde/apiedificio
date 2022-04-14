import {modeloUsuario} from '../models/Usuario.js'

export class Servicio{


    constructor(){}


    async buscar(){

       let usuarios=await modeloUsuario.find()
       return usuarios

    }

    async buscarPorId(id){

        let usuario= await modeloUsuario.findById(id)
        return usuario

    }

    async insertar(usuario){

        let usuarioNuevo= new modeloUsuario(usuario)
        return await usuarioNuevo.save()

    }

    async editar(id,usuario){

        return await modeloUsuario.findByIdAndUpdate(id,usuario)

    }


}