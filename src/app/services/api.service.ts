import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const API_URL = 'https://612687da3ab4100017a68fd8.mockapi.io/todos';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL);
  }

  addTodo(item: Todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL, item);
  }

  deleteById(id: number): Observable<null> {
    return this.http.delete<null>(API_URL + `/${id}`);
  }

  updateTodo(item: Todo): Observable<Todo> {
    return this.http.put<Todo>(API_URL + `/${item.id}`, item);
  }
}
