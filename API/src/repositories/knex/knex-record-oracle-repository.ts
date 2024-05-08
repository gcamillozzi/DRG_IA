import { error } from "console";
import { RecordOracleRepository } from "../record-oracle-repository";
import knex from '../../config/database'



export class KnexRecordIaKnexRepository implements RecordOracleRepository{
getSequence(): Promise<number> {
  throw new Error("Method not implemented.");
}

async recordOracle( send): Promise<string> {
 
  try{
    await knex.raw(`
      BEGIN
      PRC_INM_IA_DRG(
        '${send.dataUltAlteracao}',
        '${send.identificadorPaciente}',
        '${send.codigoPaciente}',
        '${send.numeroAtendimento}',
        '${send.drgRegistroPacienteRisco.dataUltAlteracao}',
        '${send.drgRegistroPacienteRisco.condicaoAdquirida}',
        '${send.drgRegistroPacienteRisco.condicaoAdquiridaInfecciosa}',
        '${send.drgRegistroPacienteRisco.condicaoAdquiridaNaoinfecciosa}',
        '${send.drgRegistroPacienteRisco.obito}',
        '${send.drgRegistroPacienteRisco.grauRiscoObito}',
        '${send.drgRegistroPacienteRisco.grauRiscocondicaoAdquirida}',
        '${send.drgRegistroPacienteRisco.grauRiscoCondicaoAdquiridaInfecciosa}',
        '${send.drgRegistroPacienteRisco.grauRiscoCondicaoAdquiridaNaoinfecciosa}',
        '${send.drgRegistroPacienteRisco.readmissao}',
        '${send.drgRegistroPacienteRisco.grauRiscoReadmissao}' 
      );
      END;
    `)

  }catch(e){
    return e;
    console.error("Erro ao inserir no oracle: ", e)
  }
}

}