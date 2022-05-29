import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvarUser(){
    console.log(this.user.email)
    if(this.user.email){
      //irá passar o objeto JSON para string
      this.user = JSON.stringify(this.user);
   
      //irá setar a string user no localStorage
      localStorage.setItem("user", this.user);
      this.router.navigateByUrl('/exercicio10/home');
      this.user = [];
    }
  }
}
