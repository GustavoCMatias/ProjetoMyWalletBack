import {mongoClient} from "mongodb"
import dotenv from 'dotenv'

dotenv.config()
const mongoClient = new mongoClient(process.env.DATABASE_URL)

mongoClient.connect()
    .then(() => {db = mongoClient.db()})
    .catch(() => {console.log('Deu ruim')})

export default db