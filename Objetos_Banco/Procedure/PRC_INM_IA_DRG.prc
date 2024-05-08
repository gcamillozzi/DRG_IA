CREATE OR REPLACE PROCEDURE INOVEMED.PRC_INM_IA_DRG  (
    dataUltAlteracao varchar2, 
    identificadorPaciente varchar2, 
    codigoPaciente varchar2, 
    numeroAtendimento varchar2, 
    dataUltAlteracaoRisco varchar2, 
    condicaoAdquirida varchar2, 
    condicaoAdquiridaI varchar2, 
    condicaoAdquiridaNaoI varchar2, 
    obito varchar2, 
    grauRiscoObito varchar2,
    grauRiscocondAdq varchar2, 
    grauRiscoCondAdqInfecciosa varchar2,
    grauRiscoCondAdqNaoinfecciosa varchar2,
    readmissao varchar2, 
    grauRiscoReadmissao varchar2
)

is 

    tbl_dti_ia_seq_w           number;
    dt_gerado_w                date ;
    cd_paciente_w              number;
    nr_atendimento_w           number;
    dt_ultima_alteracao_w      date ;
    dt_ult_alteracao_risco_w   date ;
    risco_obtido_w             varchar2(10) ;
    risco_cond_adq_w           varchar2(10) ;
    risco_cond_adq_infec_w     varchar2(10) ;
    risco_cond_adq_nao_infec_w varchar2(10) ;
    risco_readmissao_w         varchar2(10) ;


BEGIN

    --## Obtenha o próximo valor da sequência
    select  tbl_dti_ia_seq.nextval
    into    tbl_dti_ia_seq_w
    from    dual;

    --## Atribuindo valor as variaveis
    cd_paciente_w := to_number(codigoPaciente);
    nr_atendimento_w := to_number(numeroAtendimento);
    dt_gerado_w := sysdate;
    dt_ultima_alteracao_w := to_date(dataUltAlteracao, 'YYYY-MM-DD HH24:MI:SS');
    dt_ult_alteracao_risco_w := to_date(dataUltAlteracaoRisco, 'YYYY-MM-DD HH24:MI:SS');
    risco_obtido_w := grauRiscoObito;
    risco_cond_adq_w := grauRiscocondAdq;      
    risco_cond_adq_infec_w := grauRiscoCondAdqInfecciosa;
    risco_cond_adq_nao_infec_w := grauRiscoCondAdqNaoinfecciosa;
    risco_readmissao_w :=  grauRiscoReadmissao;        

--## Inserindo dados na tabela tbl_dti_ia
    insert into inovemed.tbl_dti_ia (
                                        id_integracao            ,
                                        dt_gerado                ,
                                        dt_ultima_alteracao      ,
                                        cd_paciente              ,
                                        nr_atendimento           ,
                                        dt_ult_alteracao_risco   ,
                                        risco_obtido             ,
                                        risco_cond_adq           ,
                                        risco_cond_adq_infec     ,
                                        risco_cond_adq_nao_infec ,
                                        risco_readmissao  
                                        )
                                        values(
                                        tbl_dti_ia_seq_w           ,
                                        dt_gerado_w                ,
                                        dt_ultima_alteracao_w      ,
                                        cd_paciente_w              ,
                                        nr_atendimento_w           ,
                                        dt_ult_alteracao_risco_w   ,
                                        risco_obtido_w             ,
                                        risco_cond_adq_w           ,
                                        risco_cond_adq_infec_w     ,
                                        risco_cond_adq_nao_infec_w ,
                                        risco_readmissao_w 
                                        );


END PRC_INM_IA_DRG;
/