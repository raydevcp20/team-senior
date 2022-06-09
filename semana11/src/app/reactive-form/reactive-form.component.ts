import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // formulario: FormGroup;
  
  constructor() { }
  
  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null, Validators.required),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null)
    //   })
    // });
  }
  onSubmit(){
    // console.warn(this.formulario.value);
  }
}
