import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: any){
    // exemplo de método post para caso deseje salvar em um backend
    return this.http.post('http://localhost:3000/create/user', user);
  }

  updateUser(){

  }
}
