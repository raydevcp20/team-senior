import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicosGetService {

  constructor(private http: HttpClient) { }

  //exemplo de comunicação com a pokeapi, importe o service ServicosGetService no constructor
  //da classe e use o .subscribe para capturar esse retorno em modo observable
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10');
  }
}
