import { FastifyInstance } from 'fastify'
import { postIaSearch } from './post-ia-search'

export async function iaSearchRoutes(app: FastifyInstance) {
  app.post('/searchIA', postIaSearch)
}
