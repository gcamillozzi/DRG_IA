import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeGetAcessTokenUseCase } from '../../../use-cases/factories/make-get-acess-token-use-case'
import { makeIaSearchUseCase } from '../../../use-cases/factories/make-ia-search'

export async function postIaSearch(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchAssistencialBodySchema = z.object({
    dataUltimaAlteracao: z.coerce.string().nullable(),
  })

  let { dataUltimaAlteracao } = searchAssistencialBodySchema.parse(request.body)
  if (!dataUltimaAlteracao) {
    dataUltimaAlteracao = new Date().toLocaleDateString('pt-BR')
  }

  try {
    const iaSearch = makeIaSearchUseCase()
    const getAcessTokenUseCase = makeGetAcessTokenUseCase()
    await getAcessTokenUseCase.execute()
    const assistencialResult = await iaSearch.execute({ data: dataUltimaAlteracao, descending: true })
    return reply.status(200).send();
  } catch (err) {
    return reply.status(400).send({ message: "Ocorreu um erro interno. Contacte um administrador." })
  }
}