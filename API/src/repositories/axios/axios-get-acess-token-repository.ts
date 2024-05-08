import { AxiosRequestConfig } from 'axios'
import { env } from '../../env'
import { makeRequest } from '../../utils/makeRequest'
import { GetAcessTokenRepository } from '../get-acess-token-repository'

export class AxiosGetAcessTokenRepository implements GetAcessTokenRepository {
  async getAcessToken() {
    const apiUrl = env.API_URL_LOGIN
    const data = {
      userName: env.API_userName,
      password: env.API_password,
      origin: env.API_origin,
    }
    const requestConfig: AxiosRequestConfig = {
      method: 'post',
      url: apiUrl,
      data,
    }

    const response = await makeRequest(requestConfig)
    return response.data
  }
}