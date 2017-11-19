import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-connected-back',
  templateUrl: './connected-back.component.html',
  styleUrls: ['./connected-back.component.css']
})
export class ConnectedBackComponent {
  todos: any[];
  todoText: object = {};

  constructor(private service: GetDataService) {
    this.service.getData()
      .subscribe(res => {
        // // debugger
        // console.log(res.json());
        this.todos = res.json();
      })
  }


  createTodo(todoText) {
    this.service.createTodo(todoText)
      .subscribe(res => {
        // console.log(res.json());
        this.todos = res.json();
      })

  }

  deleteTodo(e, idx) {
    this.service.deleteTodo(idx)
      .subscribe(res => {
        // console.log(res.json());
        this.todos = res.json();
      })

  }

}
