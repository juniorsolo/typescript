import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tarefas';
  tasks = [];
  task="";

  add() :void{
    this.tasks.push(this.task);
    this.task = "";
  }
}
