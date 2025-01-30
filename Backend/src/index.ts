import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()


export async function allUsers(req: Request, res: Response) {

  const users = await prisma.user.findMany()
  console.log(users)
  res.status(200).send(users)

}

export async function findUser(req: Request, res: Response) {
  const users = await prisma.user.findUnique({
    where: {
      id: parseInt(req.params['id'])
    }
  })
  res.status(200).send(users)
}