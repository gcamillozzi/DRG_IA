
CREATE SEQUENCE INOVEMED.tbl_dti_ia_seq
  START WITH 1
  MAXVALUE 999999999999999999999999999
  MINVALUE 1
  NOCYCLE
  CACHE 20
  NOORDER;

GRANT ALL PRIVILEGES ON INOVEMED.tbl_dti_ia_seq TO INOVEMED;