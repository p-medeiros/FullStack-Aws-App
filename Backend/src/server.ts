import express from 'express'
import cors from 'cors'; 
import { Router, Request, Response } from 'express';
import { allUsers, findUser } from '.';


const app = express();

const route = Router()

app.use(express.json())
app.use(cors())
route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Teste' })
})

route.get('/hello-world/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

app.use(route)


route.get('/allusers/', allUsers)
route.get('/allusers/:id', findUser)




app.listen(3333, () => 'server running on port 3333')