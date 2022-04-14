import {ServicioDeuda} from '../services/ServicioDeuda.js'


export class ControladorDeuda{


    constructor(){}

    async buscar(request,response){
        let servicio= new ServicioDeuda()
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

    async buscarPorIdGeneral(request,response){
        let servicio= new ServicioDeuda()
        let id=request.params.id
        try{
            response.status(200).json({
                mensaje:"Exito GET por id "+id,
                data:await servicio.buscarPorIdGeneral(id),
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

    async insertar(request,response){
        let datos=request.body
        let servicio= new ServicioDeuda()
        try{
            await servicio.insertar(datos)
            let deudaActual=await servicio.buscarPorIdGeneral("62574f89bf56274dcb1a61ab")
            let nuevoMonto=(deudaActual.valor)-(datos.valor)

            let objetoDeuda={
                fecha:new Date(),
                valor:nuevoMonto
            }
            await servicio.editarGeneral("62574f89bf56274dcb1a61ab",objetoDeuda)
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

    async insertarGeneral(request,response){
        let datos=request.body
        let servicio= new ServicioDeuda()
        try{
            await servicio.insertarGlobal(datos)
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

    async editar(request,response){
        let id=request.params.id
        let datos=request.body
        let servicio= new ServicioDeuda()
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

    async editarGeneral(request,response){
        let id=request.params.id
        let datos=request.body
        let servicio= new ServicioDeuda()
        try{
            servicio.editarGeneral(id,datos)
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