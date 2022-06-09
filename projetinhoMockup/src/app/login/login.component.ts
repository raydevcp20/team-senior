import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    isActive: new FormControl(false)
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl("home");
  }

}
