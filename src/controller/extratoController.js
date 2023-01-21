import db from "../config/database.js";


export async function pegarExtrato(req, res) {
    try {
        const idUsuario = res.locals.sessao.idUsuario

        const infos = await db.collection('registros').find({ idUsuario }).toArray()
        return res.status(200).send(infos)
    } catch (error) {
        res.status(500).send(error.message)
    }


}

export async function adicionarRegistro(req, res){
    try{
        const {valor, descricao, tipo} = req.body
        const {idUsuario} = res.locals.sessao 
        db.collection('registros').insertOne({idUsuario, valor: Number(valor).toFixed(2), descricao, tipo})
        return res.status(201).send('Registro criado!')


    }catch(error){
        res.status(500).send(error.message)
    }
}