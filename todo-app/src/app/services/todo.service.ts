import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Todo} from "./../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: "Learn c++",
        isComplete: true,
        date: new Date(),
      },
      {
        id: '222',
        title: "Do exercise",
        isComplete: false,
        date: new Date(),
      },
      {
        id: '333',
        title: "Take a walk",
        isComplete: true,
        date: new Date(),
      }
    ];
   }

   getTodos(){
      return of(this.todos)
   }

   addTodos(todo: Todo){
      this.todos.push(todo)
   }

   updateTodos(todo: Todo){
      this.todos.map(singleTodo => {
        if (singleTodo.id == todo.id){
          todo.isComplete = !todo.isComplete
        }
      })
   }

   deleteTodos(todo:Todo){
     const index = this.todos.findIndex(
       (currentObj) =>  currentObj.id
     );
     this.todos.splice(index,1);
   }
}


