import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-um',
  templateUrl: './exercicio-um.component.html',
  styleUrls: ['./exercicio-um.component.css'],
})
export class ExercicioUmComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('subtitle') subtitle: string = '';
  @Input('body') body: string = '';

  constructor() {}

  ngOnInit(): void {}
}
