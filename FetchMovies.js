import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

let AllMovies = await prisma.movies.findMany()
console.log(AllMovies)