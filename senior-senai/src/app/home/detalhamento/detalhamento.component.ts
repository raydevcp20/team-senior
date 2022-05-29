import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent implements OnInit {

  users: any = [
    {id: 1, nome: "User 1", login: "user1"},
    {id: 2, nome: "User 2", login: "user2"},
    {id: 3, nome: "User 3", login: "user3"}
  ];
  nome: string = "";
    
  constructor(
    private routeSnapshot: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSnapshot.snapshot.params.id;

    this.users.forEach((user: any) => {
      if(user.id == this.routeSnapshot.snapshot.params.id){
        this.nome = user.nome;
      }
    });
    
    // for(let i=0; i<this.users.length; i++){
    //   console.log(this.users[i]);
    //   if(this.users[i].id == this.routeSnapshot.snapshot.params.id){
    //     this.nome = this.users[i].nome;
    //   }
    // }
  }

}
