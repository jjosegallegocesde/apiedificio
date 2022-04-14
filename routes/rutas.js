import express from 'express'

import {ControladorDeuda} from '../controllers/controladorDeuda.js'

export let rutas=express.Router()
let controladorDeuda=new ControladorDeuda()

rutas.get('/API/v1/deudas', controladorDeuda.buscar)
rutas.post('/API/v1/deudas', controladorDeuda.insertar)
rutas.put('/API/v1/deudas/:id', controladorDeuda.editar)

rutas.get('/API/v1/deudas/general/:id', controladorDeuda.buscarPorIdGeneral)
rutas.post('/API/v1/deudas/general', controladorDeuda.insertarGeneral)
rutas.put('/API/v1/deudas/general/:id', controladorDeuda.editarGeneral)

