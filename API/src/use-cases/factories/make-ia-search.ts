import { AxiosPostIaRepository } from "../../repositories/axios/axios-post-search-iadrg";
import { KnexRecordIaKnexRepository } from "../../repositories/knex/knex-record-oracle-repository";
import { IaSearch } from "../ia-search";

export function makeIaSearchUseCase(){
  const axiosPostIaRepository = new AxiosPostIaRepository()
  const knexRecordIaSearchRepository = new KnexRecordIaKnexRepository()


  const iaSearch = new IaSearch(axiosPostIaRepository, knexRecordIaSearchRepository)

  return iaSearch
}