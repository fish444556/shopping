import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GetDataService {
  url = 'http://localhost:8088/api/todos';

  constructor(private http: Http) {

  }

  getData(){
    return this.http.get(this.url);
  }

  createTodo(todoText) {
    return this.http.post(this.url, {text: todoText});
  }

  deleteTodo(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
