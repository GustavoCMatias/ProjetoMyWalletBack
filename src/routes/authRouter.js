import express from 'express'
import { Cadastrar, Logar } from '../controller/authController.js'
import validarSchema from '../middleware/validarSchema.js'
import { SchemaUsuario, SchemaLogin } from '../Schema/authSchema.js'

const authRouter = express.Router()


authRouter.post("/cadastro", validarSchema(SchemaUsuario), Cadastrar)
authRouter.post("/", validarSchema(SchemaLogin), Logar)

export default authRouter
