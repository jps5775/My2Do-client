import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

   todos: object[];
   todoTitle : string;
   idCounter : number;

  constructor() { }

  ngOnInit() {
    this.idCounter = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id': 1,
        'title': 'Finish Angular Screencast',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Take over world',
        'completed': false,
        'editing': false,
      },
      {
        'id': 3,
        'title': 'One more thing',
        'completed': false,
        'editing': false,
      },
    ];
  }

  addTodo() {

    if(this.todoTitle.trim().length === 0){
      return;
    }

    this.todos.push({
      'id': this.idCounter,
      'title': this.todoTitle,
      'completed': false,
      'editing': false
    })

    this.todoTitle = "";
    this.idCounter++;
  }

}
