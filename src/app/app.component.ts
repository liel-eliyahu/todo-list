import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  todos = ['smile', 'eat', 'drink'];


  // addTask(newTask: string) {
  //   if (newTask) {
  //     this.value.push(newTask);
  //     console.log(this.value);

  //   }
  // }
}
