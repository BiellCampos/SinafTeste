import { Component, OnInit } from '@angular/core';
import { cliente, cobertura, coberturacliente, coberturas, dependenteAgregado, endereco, propostaseguro } from './models/propostaSeguro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.cliente = {IdCliente:1,Telefones:[],Enderecos:[],DependenteAgregado:[]};
    this.endereco={};
    this.depagred={};
    this.coberturacliente={};
    this.coberturatemp0={};
    this.coberturatemp1={};
    this.coberturatemp2={};
    this.coberturatemp3={};
    this.coberturas={coberturas:[]};
    this.propostaseguro={IdPropostaSeguro:1,Coberturascliente:[],Valortotalpremio:0};
    this.preenchecoberturas();

  }

  title = 'sinafTeste';
  cliente:cliente;
  newvalorassegurado="";
  newtel="";
  newcep="";
  newend="";
  newnum="";
  newcompl="";
  newbairro="";
  boldepagreg = 0;
  endereco:endereco;
  depagred:dependenteAgregado;
  coberturacliente:coberturacliente;
  coberturas:coberturas;
  coberturatemp0:cobertura;
  coberturatemp1:cobertura;
  coberturatemp2:cobertura;
  coberturatemp3:cobertura;
  newtipodepagreg = "";
  newnomedepagreg="";
  newcpfdepagreg="";
  propostaseguro:propostaseguro;
  newcobertura=0;

  public addTel=($event)=>{
    this.cliente.Telefones.push(this.newtel);
    this.newtel="";
    this.propostaseguro.Cliente=this.cliente;
    
  };

  public delTel=(i)=>{
   this.cliente.Telefones.splice(i,1);
  };

  public addend=($event)=>{
    this.endereco.Cep=this.newcep;
    this.endereco.EnderecoLog=this.newend;
    this.endereco.Numero=this.newnum;
    this.endereco.Complemento=this.newcompl;
    this.endereco.Bairro=this.newbairro;

    this.cliente.Enderecos.push(this.endereco);
    this.newcep="";
    this.newend="";
    this.newnum="";
    this.newcompl="";
    this.newbairro="";
    this.endereco={};
    this.propostaseguro.Cliente=this.cliente;
  };
  public delend=(j)=>{
   this.cliente.Enderecos.splice(j,1);
   this.propostaseguro.Cliente=this.cliente;
  };
  
  /**
   *  metodo para limpar lista de dependentes
   */
  public cleardepagreg(){
    this.cliente.DependenteAgregado=[];
    this.newtipodepagreg="";
    this.newnomedepagreg="";
    this.newcpfdepagreg="";
   
    this.depagred={};
    this.propostaseguro.Cliente=this.cliente;

    
  }

  /**
   *  metodo deletar dependente/agregado da lista
   */
  public deldepagreg=(k)=>{
    this.cliente.DependenteAgregado.splice(k,1);
    this.propostaseguro.Cliente=this.cliente;
   };

   public adddepagreg=($event)=>{
    this.depagred.Tipo=Number(this.newtipodepagreg);
    this.depagred.NomeDepen=this.newnomedepagreg;
    this.depagred.Cpf= this.newcpfdepagreg;

    this.cliente.DependenteAgregado.push(this.depagred);
    this.newtipodepagreg="";
    this.newnomedepagreg="";
    this.newcpfdepagreg="";
   
    this.depagred={};
    this.propostaseguro.Cliente=this.cliente;
  };
  

  private preenchecoberturas()
  {
      this.coberturatemp0.IdCobertura=0
      this.coberturatemp0.Descricao="Assistencia Funeral"
      this.coberturatemp0.Percentual=7

      this.coberturas.coberturas.push(this.coberturatemp0);

      this.coberturatemp1.IdCobertura=1
      this.coberturatemp1.Descricao="Seguro de vida"
      this.coberturatemp1.Percentual=10

      this.coberturas.coberturas.push(this.coberturatemp1);

    
      this.coberturatemp2.IdCobertura=2
      this.coberturatemp2.Descricao="Seguro residencial"
      this.coberturatemp2.Percentual=5

      this.coberturas.coberturas.push(this.coberturatemp2);

      this.coberturatemp3.IdCobertura=3
      this.coberturatemp3.Descricao="Seguro veicular"
      this.coberturatemp3.Percentual=8

      this.coberturas.coberturas.push(this.coberturatemp3);

     
  };

  public addcobertura($event){
  
    this.coberturacliente.Cobertura=this.coberturas.coberturas[this.newcobertura];
    this.coberturacliente.Valorsegurado=Number(this.newvalorassegurado);
    this.coberturacliente.Valorpremio=Number(this.newvalorassegurado)*(Number(this.coberturas.coberturas[this.newcobertura].Percentual)/100)
   
  
    this.propostaseguro.Coberturascliente.push(this.coberturacliente);
    
    this.propostaseguro.Valortotalpremio = this.propostaseguro.Valortotalpremio +this.coberturacliente.Valorpremio;
    this.coberturacliente={};
    this.newcobertura=null;
    this.newvalorassegurado="";

  };

  public delcobertura=(n)=>{

    this.propostaseguro.Valortotalpremio = this.propostaseguro.Valortotalpremio - this.propostaseguro.Coberturascliente[n].Valorpremio; 

    this.propostaseguro.Coberturascliente.splice(n,1);
  }
}
