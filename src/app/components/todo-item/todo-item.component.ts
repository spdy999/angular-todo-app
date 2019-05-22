import { Component, OnInit, Input } from '@angular/core';
import { Todo, Classes } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  // Set Dynamic Classes
  setClasses(): Classes {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todo) {
    console.log('delete');
  }
}
