import joi from 'joi'

export const SchemaUsuario = joi.object({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    senha: joi.string().required(),
    confirmacao: joi.string().valid(joi.ref('senha')).required()

})

export const SchemaLogin = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().required(),
})