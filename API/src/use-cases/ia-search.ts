import { PostSearchIADrgData } from "../dto/ia_search_DTO";
import { KnexRecordIaKnexRepository } from "../repositories/knex/knex-record-oracle-repository";
import { IaRepository } from "../repositories/post-iadrg-repository";

export class IaSearch {
  constructor(
    private postIaDrgRepository: IaRepository,
    private knexRecordIaKnexRepository: KnexRecordIaKnexRepository,
  ) { }

  async execute(data: PostSearchIADrgData): Promise<string[]> {
    const proceduresErros: string[] = [];
    try {
      let records = 0 
      let hasPage: boolean = true;
      for (let counterPages = 1; hasPage == true; counterPages++) {
        data.page = counterPages;
        const ia = await this.postIaDrgRepository.postIa(data)
        if (ia.items.length == 0) {
          hasPage = false;
          break;
        }
        for (const item of ia.items) {
          records = records + 1
          const send = {
            dataUltAlteracao: item.dataUltAlteracao,
            identificadorPaciente: item.identificadorPaciente,
            codigoPaciente: item.codigoPaciente,
            numeroAtendimento: item.numeroAtendimento,
            numeroAutorizacao: item.numeroAutorizacao,
            drgRegistroPacienteRisco: {
              condicaoAdquirida: item.drgRegistroPacienteRisco.condicaoAdquirida,
              condicaoAdquiridaInfecciosa: item.drgRegistroPacienteRisco.condicaoAdquiridaInfecciosa,
              condicaoAdquiridaNaoinfecciosa: item.drgRegistroPacienteRisco.condicaoAdquiridaNaoinfecciosa,
              dataUltAlteracao: item.drgRegistroPacienteRisco.dataUltAlteracao,
              grauRiscoCondicaoAdquiridaInfecciosa: item.drgRegistroPacienteRisco.grauRiscoCondicaoAdquiridaInfecciosa,
              grauRiscoCondicaoAdquiridaNaoinfecciosa: item.drgRegistroPacienteRisco.grauRiscoCondicaoAdquiridaNaoinfecciosa,
              grauRiscoObito: item.drgRegistroPacienteRisco.grauRiscoObito,
              grauRiscoReadmissao: item.drgRegistroPacienteRisco.grauRiscoReadmissao,
              grauRiscocondicaoAdquirida: item.drgRegistroPacienteRisco.grauRiscocondicaoAdquirida,
              obito: item.drgRegistroPacienteRisco.obito,
              readmissao: item.drgRegistroPacienteRisco.readmissao
            }
          }
          const resultRecordOracleProcedure = await this.knexRecordIaKnexRepository.recordOracle(send)
          proceduresErros.push(resultRecordOracleProcedure);
        }
      }
      console.log('Total de registros: ' + records)
      return ;
    } catch (e) {
      return ["Ocorreu um erro interno. Contacte um administrador."]
      console.error("Erro: ", e)
    }

  }
}