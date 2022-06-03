import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-aula04',
  templateUrl: './aula04.component.html',
  styleUrls: ['./aula04.component.css']
})
export class Aula04Component implements OnInit {
  usuario:any = {
    email:"",
    password:"",
    state:"",
    favorite:"",
    isActive: true
  };

  check: boolean= false;

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Usuário:', this.usuario);
    //chamada para o service para o envio do objeto usuario
    this.userService.createUser(this.usuario).subscribe(
      (data)=>{
        //Resto da implementação
      }
    );
  }
}
