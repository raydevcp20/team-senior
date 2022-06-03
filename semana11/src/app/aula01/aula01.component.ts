import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-aula01',
  templateUrl: './aula01.component.html',
  styleUrls: ['./aula01.component.css']
})
export class Aula01Component implements AfterViewInit {
  json: any = {
    nome: 'Rayane',
    localizacao: 'Recife',
    idade: 21
  };
  @ViewChild('div') elementDiv:any;
  @ViewChildren('input') elementInput:any;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.elementInput);
  }

}
