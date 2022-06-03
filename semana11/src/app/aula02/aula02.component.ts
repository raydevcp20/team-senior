import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aula02',
  templateUrl: './aula02.component.html',
  styleUrls: ['./aula02.component.css']
})
export class Aula02Component implements OnInit{
  //Exemplos
  @ViewChild('input') input: ElementRef;
  hasLength: boolean = false;

  //Exercicio 01
  clicou: boolean = false;
  tamanho: number = 19;

  //Exercicio 02
  tamanhoFonte: number = 0;

  //ngSwitch
  choseAlert: string = "";
  tagTitle: string = "";


  ngOnInit(): void {}

  //Exemplo
  typing() {
    console.log(this.input.nativeElement.value.length)
    if(this.input.nativeElement.value.length){
      this.hasLength = true;
    }else{
      this.hasLength = false;
    }
  }

}
