import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const data = [{
    "name": "Josephina Andino"
  }, {
    "name": "Kameko McCague"
  }, {
    "name": "Jodi Kimberly"
  }, {
    "name": "Philipa Gilkison"
  }, {
    "name": "Johnnie Wyon"
  }, {
    "name": "Dalenna Boreland"
  }, {
    "name": "Ware Riccardo"
  }, {
    "name": "Reggie Mayoral"
  }, {
    "name": "Pierrette Mossbee"
  }, {
    "name": "Bendick Pudsall"
  }]
  

const CREATE = async (data) => {
    const result = await prisma.user.createMany({
        data: [...data]
    })
    console.log(result)
}

CREATE(data)