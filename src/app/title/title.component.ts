import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  title: string;
  constructor() {
    this.title = 'TO DO LIST';
  }

  @Output() emitTodo = new EventEmitter<{nameTodo: string}>();

  newTodo(nameTodo) {
    this.emitTodo.emit(nameTodo);
  }
}
