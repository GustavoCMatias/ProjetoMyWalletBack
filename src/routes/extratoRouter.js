import express from "express";
import { adicionarRegistro, pegarExtrato } from "../controller/extratoController.js";
import tokenValidation from "../middleware/authMiddleware.js";
import validarSchema from "../middleware/validarSchema.js";
import { schemaRegistro } from "../Schema/extratoSchema.js";

const extratoRouter = express.Router()

extratoRouter.get('/registros', tokenValidation, pegarExtrato)
extratoRouter.post('/registros', validarSchema(schemaRegistro), tokenValidation, adicionarRegistro)



export default extratoRouter