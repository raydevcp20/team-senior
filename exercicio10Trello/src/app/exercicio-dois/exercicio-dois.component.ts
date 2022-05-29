import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.css']
})
export class ExercicioDoisComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('subtitle') subtitle: string = '';
  @Input('body') body: string = '';

  @Input('classHeader') classHeader: string = '';
  @Input('classBody') classBody: string = '';

  @Output() mudeCores: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
