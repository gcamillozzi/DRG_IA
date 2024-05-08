import { EnvironmentVariables } from '../env/index'
import { GetAcessTokenRepository } from '../repositories/get-acess-token-repository'

export class GetAccessTokenUseCase {
  constructor(
    private environmentVariables: EnvironmentVariables,
    private getAcessTokenRepository: GetAcessTokenRepository,
  ) {}

  async execute(): Promise<void> {
  
    const apiResponse = await this.getAcessTokenRepository.getAcessToken()

    const accessToken = apiResponse

    this.environmentVariables.API_TOKEN = accessToken
    console.log('O accessToken se não existia', accessToken)
    return
  }
}