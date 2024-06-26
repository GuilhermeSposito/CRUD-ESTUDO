CREATE TABLE
  public.produtos (
    id serial NOT NULL,
    nome character varying(80) NOT NULL,
    descricao character varying(100) NULL,
    valor double precision NOT NULL
  );

ALTER TABLE
  public.produtos
ADD
  CONSTRAINT produtos_pkey PRIMARY KEY (id)