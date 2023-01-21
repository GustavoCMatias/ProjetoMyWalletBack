import db from "../config/database.js";

export default async function tokenValidation(req, res, next){
    const {authorization} = req.headers
    const token = authorization?.replace("Bearer ", "")
    if(!token) return res.status(422).send("informe o token!")

    try{
        const userInfo = await db.collection('sessoes').findOne({token})
        if(!userInfo)return res.status(401).send("Acesso não autorizado!")
        res.locals.sessao = userInfo
        next()
    }catch(error){
        res.status(500).send(error.message)
    }

}