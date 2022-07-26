import { PrismaClient } from '@prisma/client'
import FS from 'fs'
const prisma = new PrismaClient()


async function main() {
    const Movies = JSON.parse(FS.readFileSync('./movies.json', 'utf8'))
    await Movies.forEach(async (movie) => {
        await prisma.movies.create({
            data: {
                ...movie
            }
        })
    })

}

await main()