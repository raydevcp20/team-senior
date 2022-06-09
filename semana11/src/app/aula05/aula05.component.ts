import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-aula05',
  templateUrl: './aula05.component.html',
  styleUrls: ['./aula05.component.css']
})
export class Aula05Component implements OnInit {
  array: any = [];

  constructor(
    private pokeService: UserService
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe(
      (pokemons: any)=>{
        this.array = pokemons.results;
      }
    )
  }

  showInformations(index: number){
    // console.log(this.array[index]);

    this.array.splice(index , 1);
  }
}
