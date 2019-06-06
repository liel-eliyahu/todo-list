import { Component, SimpleChange } from '@angular/core';
import { Todo } from '../_models/todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      new Todo('smile'),
      new Todo('run'),
      new Todo('walk')
    ];
  }

  addTodo(nameTodo: string) {
    if (nameTodo) {
      this.todos.push(new Todo(nameTodo));
    }
  }
  check(indexTodo: number) {
    this.todos[indexTodo].completeMode = !this.todos[indexTodo].completeMode;
  }
  tuggleEditMode(indexTodo: number) {
    this.todos[indexTodo].editMode = !this.todos[indexTodo].editMode;
  }
  edit(indexTodo: number, nameTodo: string) {
    if (nameTodo) {
      this.todos[indexTodo].name = nameTodo;
    }
    this.todos[indexTodo].editMode = false;
  }
  delete(indexTodo: number) {
    this.todos.splice(indexTodo, 1);
  }
}
