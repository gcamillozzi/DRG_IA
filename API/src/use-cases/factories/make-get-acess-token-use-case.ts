import { AxiosGetAcessTokenRepository } from '../../repositories/axios/axios-get-acess-token-repository'

import { env } from '../../env/index'
import { GetAccessTokenUseCase } from '../get-acess-token'

export function makeGetAcessTokenUseCase() {
  const axiosGetAcessTokenRepository = new AxiosGetAcessTokenRepository()

  const getAcessTokenRepository = new GetAccessTokenUseCase(
    env,
    axiosGetAcessTokenRepository,
  )

  return getAcessTokenRepository
}