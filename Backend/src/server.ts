import express from 'express'
import cors from 'cors'; 
import { Router, Request, Response } from 'express';
import * as controllers from './index'
import { Populete } from './seed';


const app = express();

const route = Router()
const population = Populete()

app.use(express.json())
app.use(cors())
route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Teste' })
})

route.get('/hello-world/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

app.use(route)


// Rotas para User
app.post('/users', controllers.createUser)
app.get('/users', controllers.getAllUsers)
app.get('/users/:id', controllers.getUserById)
app.put('/users/:id', controllers.updateUser)
app.delete('/users/:id', controllers.deleteUser)

// Rotas para Post
app.post('/posts', controllers.createPost)
app.get('/posts', controllers.getAllPosts)
app.get('/posts/:id', controllers.getPostById)
app.put('/posts/:id', controllers.updatePost)
app.delete('/posts/:id', controllers.deletePost)

// Rotas para Profile
app.post('/profiles', controllers.createProfile)
app.get('/profiles', controllers.getAllProfiles)
app.get('/profiles/:id', controllers.getProfileById)
app.put('/profiles/:id', controllers.updateProfile)
app.delete('/profiles/:id', controllers.deleteProfile)

// Middleware de tratamento de erros
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err)
    res.status(500).json({ error: err.message })
  })

app.listen(3333, () => 'server running on port 3333')