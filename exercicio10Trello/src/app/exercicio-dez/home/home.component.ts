import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    user = localStorage.getItem('user');
    let userObj = JSON.parse(user || "");
    console.log(userObj)
  }

}
