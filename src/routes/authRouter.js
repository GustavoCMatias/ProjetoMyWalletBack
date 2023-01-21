import express from 'express'
import { Cadastrar } from '../controller/authController.js'
import validarSchema from '../middleware/validarSchema.js'
import { SchemaUsuario } from '../Schema/authSchema.js'

const authRouter = express.Router()


authRouter.post("/cadastro", validarSchema(SchemaUsuario), Cadastrar)

export default authRouter
