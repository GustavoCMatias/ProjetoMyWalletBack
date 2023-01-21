export default function validarSchema(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {abortEarly: false})
        if (error) {
            const msgErro = error.details.map(err => err.message)
            return res.status(422).send(msgErro)
        }
        next()
    }
}