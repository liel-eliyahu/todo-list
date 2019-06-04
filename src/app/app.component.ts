import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  todos = ['smile', 'eat', 'drink'];
  index: number;
  doneClass: string;

  addTodo(newTodo) {
    if (newTodo) {
      this.todos.push(newTodo);
    }
  }
  check(done, indexOldTodo) {
    if (done) {
      console.log('1');
      this.doneClass = 'strikethrough';
    }
  }
  edit(indexOldTodo, newTodo) {
    this.todos[indexOldTodo] = newTodo;
  }
  delete(indexTodo) {
    this.todos.splice(indexTodo, 1);
    console.log(this.todos);

  }
}
