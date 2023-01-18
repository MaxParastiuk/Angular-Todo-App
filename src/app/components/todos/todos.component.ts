import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Input()
  todos!: Todo[];

  inputTodo: string = '';

  @Output()
  submitTodo: EventEmitter<Todo> = new EventEmitter();
  @Output()
  deleteTodoById: EventEmitter<Todo> = new EventEmitter();
  @Output()
  updateTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  toggleDone(todo: Todo): void {
    this.updateTodo.emit({ ...todo, completed: !todo.completed });
  }

  deleteTodo(todo: Todo, e: Event): void {
    e.stopPropagation();
    this.deleteTodoById.emit(todo);
  }

  addTodo() {
    if (this.inputTodo) {
      this.submitTodo.emit({
        title: this.inputTodo,
        completed: false,
      });

      this.inputTodo = '';
    }
  }
}
