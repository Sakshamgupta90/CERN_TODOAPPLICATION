import {Component } from '@angular/core';
import {Todo, TodoService} from "./todo.service";
import {Observable, of} from "rxjs";


@Component({
  selector: 'app-root',
  template: `
    <div class="title">
      <h1>
        A list of TODOs
      </h1>
    </div>
    <div class="list">
      <label for="search">Search...</label>
      <input id="search" type="text" #box (keyup)="searchTodo(box.value)"/>
      <app-progress-bar id="progress-bar"></app-progress-bar>
      <app-todo-item  (click)="onClick(todo)" *ngFor="let todo of todos$ | async" [item]="todo" ></app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})


export class AppComponent {

  readonly todos$: Observable<Todo[]>;
  tasks: Todo[] = [];
  todoservice: TodoService;
  message?: string = undefined;

  constructor(todoService: TodoService) {
    this.todos$ = todoService.getAll();
    this.todos$.subscribe(data => this.tasks = data)
    this.todoservice = todoService;
  }

  // Implementation Search 

  searchTodo(searchText: string) {
    //console.log(searchText)
    if (!searchText) {
      (this.todos$ as any) = of(this.tasks)
      return;
    }
    else {
      let matched: any = this.tasks.filter(todo => todo.task.toLowerCase().includes(searchText.toLowerCase()));
      console.log(matched);
      (this.todos$ as any) = of(matched);
    }
  }

  //Implement delete 

  onClick(t: any){
    console.log(t)
    this.todoservice.remove(t.id).subscribe(
      () => {
        (this.todos$ as any) = this.todoservice.getAll();
      },
      );
  }

  //Implement loading bar

  ngAfterViewInit() {
    let element = document.getElementById('progress-bar')
    // console.log(element)
    if(element != undefined){
      setTimeout(() => {
        element!.id = 'progress-bar-hidden'
      }, 2_000)   
    }

  }
}
