import { AxiosRequestConfig } from 'axios'

import { makeRequest } from '../../utils/makeRequest'
import { env } from '../../env'
import { IaRepository, } from '../post-iadrg-repository'
import { IaSearchDTO, PostSearchIADrgData } from '../../dto/ia_search_DTO'

export class AxiosPostIaRepository
  implements IaRepository {
  async postIa(data: PostSearchIADrgData): Promise<IaSearchDTO> {
    
    const apiUrl = env.API_URL_SEARCH

    const headers = {
      'x-api-key': env.API_KEY,
      authorization: env.API_TOKEN,
      'Content-Type': 'application/json',
    }

    const requestConfig: AxiosRequestConfig = {
      method: 'post',
      url: apiUrl,
      headers,
      data,
    }

    const response = await makeRequest(requestConfig)
    return response.data
  }
}