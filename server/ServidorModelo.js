//const express = require('express')
import express from 'express'
import cors from 'cors';
import {rutas} from '../routes/rutas.js'
import {establecerConexion} from '../database/conexion.js'

export class Servidor{

    constructor(){
        this.app = express()
        this.conectarConBD()
        this.auxiliares()
        this.enrutarPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(process.env.PORT)
        })
    }

    conectarConBD(){
        establecerConexion()
    }

    enrutarPeticiones(){
       this.app.use("/",rutas)
    }

    auxiliares(){
        
        this.app.use(cors);
        this.app.use(express.json())
    }




}