CREATE TABLE DATAINTEGRA.TBL_DTI_IA
(
  id_integracao                 NUMBER,
  dt_gerado                     DATE,
  dt_ultima_alteracao           DATE,     --dataUltAlteracao
  cd_paciente                   NUMBER,   --codigoPaciente
  nr_atendimento                NUMBER,   --numeroAtendimento
  dt_ult_alteracao_risco        date,     --dataUltAlteracaoRisco
  risco_obtido                  varchar2 ( 10 byte),     --grauRiscoObito
  risco_cond_adq                varchar2 ( 10 byte),     --grauRiscocondicaoAdquirida
  risco_cond_adq_infec          varchar2 ( 10 byte),     --grauRiscoCondicaoAdquiridaInfecciosa
  risco_cond_adq_nao_infec      varchar2 ( 10 byte),     --grauRiscoCondicaoAdquiridaNaoinfecciosa
  risco_readmissao              varchar2 ( 10 byte)      --grauRiscoReadmissao
)
TABLESPACE USERS
PCTUSED    0
PCTFREE    10
INITRANS   1
MAXTRANS   255
STORAGE    (
            PCTINCREASE      0
            BUFFER_POOL      DEFAULT
           )
LOGGING 
NOCOMPRESS 
NOCACHE;


GRANT ALL PRIVILEGES ON DATAINTEGRA.TBL_DTI_IA TO INOVEMED;
