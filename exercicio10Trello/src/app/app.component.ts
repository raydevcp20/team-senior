import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio10Trello';

  contentBody = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id natus autem recusandae voluptate quas iste, perferendis molestiae, amet eveniet ea sint maiores illum, nisi exercitationem quibusdam incidunt eum. Odit, officiis.';
  corHeader = 'bg-danger';
  corBody = 'bg-info';

  trocarCores(){
      this.corHeader = 'bg-dark';
      this.corBody = 'bg-danger';
  }

}
