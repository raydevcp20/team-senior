import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula03',
  templateUrl: './aula03.component.html',
  styleUrls: ['./aula03.component.css']
})
export class Aula03Component implements OnInit {
  password: string = "";
  email: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
