import joi from 'joi'

export const schemaRegistro = joi.object({
    tipo: joi.string().valid('entrada', 'saida'),
    descricao: joi.string(),
    valor: joi.number().precision(2).required()

})