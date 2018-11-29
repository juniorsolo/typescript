import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tarefas';
  textUpper = 'Texto In Upper Case';
  valuePercent: number = 0.5;
  date: Date = new Date();
  money: number = 599;
  isAdmin : boolean = true;
  profile : number = 2;

  user : User = {
    name: 'Bob',
    age: 25
  }
}
