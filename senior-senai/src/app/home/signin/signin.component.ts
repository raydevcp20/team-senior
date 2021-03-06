import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  text:string = "";
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    //imprime a url do path atual
    console.log(this.router.url);
  }

  redirect(){
    //Navegação feita pelo component.ts
    this.router.navigateByUrl('/home');
  }
}
