

export interface propostaseguro{
    IdPropostaSeguro?:number
    Cliente?:cliente
    Coberturascliente?:coberturacliente[]
    Valortotalpremio?:number

}

export interface cliente{
    IdCliente?:number
    Nome?:string
    Cpf?:string
    DtNascimento?:Date
    Sexo?:boolean
    Email?:string
    Telefones?:string[]
    Enderecos?:endereco[]
    DependenteAgregado?:dependenteAgregado[]

    
}


export interface endereco{
    Cep?:string
    EnderecoLog?:string
    Numero?:string
    Bairro?:string
    Complemento?:string
    
}

export interface cobertura{
    IdCobertura?:number
    Descricao?:string
    Percentual?:number

}

export interface coberturas{
    coberturas?:cobertura[];
}

export interface coberturacliente{
    Cobertura?:cobertura
    Valorsegurado?:number
    Valorpremio?:number
}


export interface dependenteAgregado{
    Tipo?:number
    NomeDepen?:string
    Cpf?:string
}
