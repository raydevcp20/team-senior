import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteItem(index: number){
    this.users.splice(index, 1);
  }

  editItem(index: number){
    this.router.navigateByUrl(`/home/edit/${index}`);
  }

}
