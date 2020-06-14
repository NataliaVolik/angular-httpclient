import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-httpclient';

  todos: Todo [] = []

  constructor(public http: HttpClient) {

  }
  ngOnInit(){
    this.http.get<Todo []>('https://jsonplaceholder.typicode.com/todos/?_limit=2')
      .subscribe(todos => {
        console.log('Response: ', todos);
        this.todos = todos;
      })
  }
}
