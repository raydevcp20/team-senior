import { Component, OnInit } from '@angular/core';
import { ServicosGetService } from './services/servicos-get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //variavel a ser enviada pelo atributo @input
  arrayFilmes: any = [
    'Harry potter',
    'Doutor estranho',
  ];

  constructor(
    private servico: ServicosGetService
  ){}

  ngOnInit(){
    //Uso do service da pokeapi
    this.servico.getPokemons().subscribe(
      (pokemons: any)=>{
        // console.log(pokemons);
      }
    );
  }

  //metodo a ser enviado pelo atributo @output
  clicouNoNome($event: any){
    console.log($event)
  }
}
