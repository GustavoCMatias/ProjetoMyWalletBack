import db from "../config/database.js";
import bcrypt from "bcrypt"
import { v4 as uuidv4 } from 'uuid'

export async function Cadastrar(req, res) {
    const { nome, email, senha } = req.body

    const senhaHashed = bcrypt.hashSync(senha, 10)

    try {
        const existente = await db.collection("usuarios").findOne({ email })
        if (existente) return res.status(409).send("Usuário já existe!")

        await db.collection("usuarios").insertOne({ nome, email, senhaHashed })
        res.status(201).send("Usuario criado!")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function Logar(req, res) {
    try {
        const { email, senha } = req.body

        const dbInfo = await db.collection('usuarios').findOne({ email })
        if (!dbInfo) return res.status(403).send('Email/senha inválido')

        const checkSenha = bcrypt.compareSync(senha, dbInfo.senhaHashed)

        if (!checkSenha) return res.status(403).send('Email/senha inválido')

        const sessionInfo = await db.collection('sessoes').findOne({ idUsuario: dbInfo._id })
        if (sessionInfo) return res.status(200).send(sessionInfo.token)
        const token = uuidv4()
        await db.collection('sessoes').insertOne({ idUsuario: dbInfo._id, token })
        return res.status(200).send(token)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

