import express from "express";
import cors from "cors"
import authRouter from "./routes/authRouter.js";
import extratoRouter from "./routes/extratoRouter.js";




const server = express()
server.use(express.json())
server.use(cors())
server.use([authRouter, extratoRouter])

server.listen(5000, () =>{
    console.log('deu bom')
})

