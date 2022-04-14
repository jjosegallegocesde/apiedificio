import {Servicio} from '../services/Servicio.js'


export class Controlador{


    constructor(){}

    async buscar(request,response){
        let servicio= new Servicio()
        try{
            response.status(200).json({
                mensaje:"Exito GET todos",
                data:await servicio.buscar(),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Falla "+error,
                data:[],
                estado:false    
            })
        }
    }

    buscarPorId(request,response){
        let servicio= new Servicio()
        let id=request.params.id
        try{
            response.status(200).json({
                mensaje:"Exito GET por id "+id,
                data:servicio.buscarPorId(id),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Falla",
                data:[],
                estado:false    
            })
        }
    }

    insertar(request,response){
        let datos=request.body
        let servicio= new Servicio()
        try{
            servicio.insertar(datos)
            response.status(200).json({
                mensaje:"Exito POST",
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Falla "+error,
                estado:false    
            })
        }
    }

    editar(request,response){
        let id=request.params.id
        let datos=request.body
        let servicio= new Servicio()
        try{
            servicio.editar(id,datos)
            response.status(200).json({
                mensaje:"Exito PUT",
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Falla",
                estado:false    
            })
        }
    }



}