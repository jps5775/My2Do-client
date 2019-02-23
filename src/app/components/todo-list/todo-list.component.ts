import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

   todos: Todo[];
   todoTitle : string;
   idCounter : number;
   beforeEditCache: string;

  constructor() { }

  ngOnInit() {
    this.beforeEditCache = '';
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

  addTodo(): void{

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

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  editTodo(todo: Todo): void{
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if(todo.title.trim().length === 0){
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo){
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

}

