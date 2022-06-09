import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editing-user',
  templateUrl: './editing-user.component.html',
  styleUrls: ['./editing-user.component.css']
})
export class EditingUserComponent implements OnInit {
  users: any = [{
    login: "Lucas Felipe",
    email: "lucas@gmail.com",
    senha: "kaihfenfvelheaolv",
    idade: 18,
    ativo: true
    },
    {
    login: "Isabela Oliveira",
    email: "isa@gmail.com",
    senha: "segrfdbhelheaolv",
    idade: 28,
    ativo: true
    },
    {
    login: "Túlio Yago",
    email: "tulio@gmail.com",
    senha: "asegyjulaujlaeyhi",
    idade: 22,
    ativo: false
    },
    {
    login: "Jorge Lucas",
    email: "jorge@gmail.com",
    senha: "pajfejnfkefegergesdf",
    idade: 45,
    ativo: true
    },
    {
    login: "Raquel Bastos",
    email: "raquel@gmail.com",
    senha: "hmktguyhrfbhtrbhb",
    idade: 30,
    ativo: true
    },
    {
    login: "Bruna Silva",
    email: "bruna@gmail.com",
    senha: "dthbntnjrftbntse",
    idade: 32,
    ativo: false
    }]


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
