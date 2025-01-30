// src/interfaces/models.ts

export interface Post {
    id: number
    createdAt: string
    updatedAt: string
    title: string
    content?: string
    published: boolean
    authorId: number
  }
  
  export interface Profile {
    id: number
    bio?: string
    userId: number
  }
  
  export interface User {
    id: number
    email: string
    name?: string
  }
  