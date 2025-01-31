import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'

const prisma = new PrismaClient()

const handleError = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch(next)
}

//------------------------------- CRUD para a tabela User -----------------------------
export const createUser = handleError(async (req: Request, res: Response) => {
  const { email, name } = req.body
  const user = await prisma.user.create({
    data: { email, name },
  })
  res.status(201).json(user)
})

export const getAllUsers = handleError(async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    // include: { posts: true, profile: true },
  })
  console.log('teste')
  res.status(200).json(users)
})

// export async function allUsers(req: Request, res: Response) {

//   const users = await prisma.user.findMany()
//   console.log(users)
//   res.status(200).send(users)

// }

export const getUserById = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    // include: { posts: true, profile: true },
  })
  res.status(200).json(user)
})


// export async function findUser(req: Request, res: Response) {
//   const users = await prisma.user.findUnique({
//     where: {
//       id: parseInt(req.params['id'])
//     }
//   })
//   res.status(200).send(users)
//   }

export const updateUser = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  const { email, name } = req.body
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { email, name },
  })
  res.status(200).json(user)
})

export const deleteUser = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  await prisma.user.delete({ where: { id: Number(id) } })
  res.status(204).send()
})

// ---------------------------------CRUD para tabela Post-----------------------------
export const createPost = handleError(async (req: Request, res: Response) => {
  const { title, content, published, authorId } = req.body
  const post = await prisma.post.create({
    data: { title, content, published, authorId },
  })
  res.status(201).json(post)
})

export const getAllPosts = handleError(async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    include: { author: true },
  })
  res.status(200).json(posts)
})

export const getPostById = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    // include: { author: true },
  })
  res.status(200).json(post)
})

export const updatePost = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, content, published } = req.body
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { title, content, published },
  })
  res.status(200).json(post)
})

export const deletePost = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  await prisma.post.delete({ where: { id: Number(id) } })
  res.status(204).send()
})


//---------------------------------- CRUD para a tabela Profile-----------------------
export const createProfile = handleError(async (req: Request, res: Response) => {
  const { bio, userId } = req.body
  const profile = await prisma.profile.create({
    data: { bio, userId },
  })
  res.status(201).json(profile)
})

export const getAllProfiles = handleError(async (req: Request, res: Response) => {
  const profiles = await prisma.profile.findMany({
    include: { user: true },
  })
  res.status(200).json(profiles)
})

export const getProfileById = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  const profile = await prisma.profile.findUnique({
    where: { id: Number(id) },
    include: { user: true },
  })
  res.status(200).json(profile)
})

export const updateProfile = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  const { bio } = req.body
  const profile = await prisma.profile.update({
    where: { id: Number(id) },
    data: { bio },
  })
  res.status(200).json(profile)
})

export const deleteProfile = handleError(async (req: Request, res: Response) => {
  const { id } = req.params
  await prisma.profile.delete({ where: { id: Number(id) } })
  res.status(204).send()
})