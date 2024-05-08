
export interface PostSearchIADrgData {
    data?: string
    descending?: true,
    page?: number,
    sortBy?: string

}


export interface IaSearchDTO {
    total: number;
    items: ItemIaSearchDto[]
}
export interface ItemIaSearchDto {
    dataUltAlteracao: string,
    identificadorPaciente: string,
    codigoPaciente: number,
    numeroAtendimento: string,
    numeroAutorizacao: string,
    drgRegistroPacienteRisco: DrgRegistroPacienteRiscoItemIaSearch
}

export interface DrgRegistroPacienteRiscoItemIaSearch {
    dataUltAlteracao: string,
    condicaoAdquirida: number,
    condicaoAdquiridaInfecciosa: number,
    condicaoAdquiridaNaoinfecciosa: number,
    obito: number,
    grauRiscoObito: string,
    grauRiscocondicaoAdquirida: string,
    grauRiscoCondicaoAdquiridaInfecciosa: string,
    grauRiscoCondicaoAdquiridaNaoinfecciosa: string,
    readmissao: number,
    grauRiscoReadmissao: string
}