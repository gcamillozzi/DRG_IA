import { FastifyInstance, fastify } from 'fastify'
import cors from '@fastify/cors'

import { healthCheckRoutes } from '../http/controllers/healthCheck/routes'
import { postIaSearch } from '../http/controllers/iaSearch/post-ia-search'
import { iaSearchRoutes } from '../http/controllers/iaSearch/routes'

export const app: FastifyInstance = fastify()

app.register(cors, {
  origin: true,
})

app.register(healthCheckRoutes)
app.register(iaSearchRoutes)
