import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  nome: string = "";

  constructor(
    private activateRouting: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.nome = this.activateRouting.snapshot.params.nome;
    console.log(this.activateRouting)
    // this.nome = this.routeSnapshot.params.nome;
  }

}
