import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  todos: Todo[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllTodos().subscribe((todos) => (this.todos = todos));
  }

  onAddTodo(item: Todo) {
    this.api.addTodo(item).subscribe((newTodo) => this.todos.push(newTodo));
  }

  onDeleteTodo(todo: Todo) {
    this.api
      .deleteById(todo.id!)
      .subscribe(
        (el) => (this.todos = this.todos.filter((el) => el.id !== todo.id))
      );
  }

  onUpdateTodo(todo: Todo) {
    this.api.updateTodo(todo).subscribe((el) => {
      this.todos.map((el) => {
        if (el.id === todo.id) el.completed = !el.completed;
        return el;
      });
    });
  }
}
