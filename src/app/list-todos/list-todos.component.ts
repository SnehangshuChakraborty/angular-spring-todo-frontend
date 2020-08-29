import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
  { id: 1, description: 'Learn Angular'},
  { id: 2, description: 'Learn Spring'},
  { id: 3, description: 'Learn React'},
  { id: 4, description: 'Learn Competetive Programming'},
  { id: 5, description: 'Learn All fucking skills'},
  { id: 6, description: 'Join Google'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
