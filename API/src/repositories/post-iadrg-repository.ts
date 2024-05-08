import { IaSearchDTO, PostSearchIADrgData } from "../dto/ia_search_DTO"




export interface IaRepository {
  postIa(info: PostSearchIADrgData): Promise<IaSearchDTO>
}