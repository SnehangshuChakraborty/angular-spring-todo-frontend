import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public description: string,
    public isComplete: boolean,
    public etaDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1,'Learn Angular',false,new Date()),
    new Todo(2,'Learn Spring',false,new Date()),
    new Todo(3,'Learn React',false,new Date()),
    new Todo(4,'Learn Competetive Programming',false,new Date()),
    new Todo(5,'Join Google',false,new Date()),
]

  constructor() { }

  ngOnInit(): void {
  }

}
