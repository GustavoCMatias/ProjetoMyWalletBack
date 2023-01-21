import db from "../config/database.js";
import bcrypt from "bcrypt"

export async function Cadastrar(req, res){
    const {nome, email, senha} = req.body

    const senhaHashed = bcrypt.hashSync(senha, 10)

    try{
        const existente = await db.collection("usuarios").findOne({email})
        if(existente)return res.status(409).send("Usuário já existe!")

        await db.collection("usuarios").insertOne({nome, email, senhaHashed})
        res.status(201).send("Usuario criado!")
    }catch(error){
        res.status(500).send(error.message)
    }
}

