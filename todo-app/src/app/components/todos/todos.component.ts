import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

import { Todo}  from "./../../model/todo";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faThrash = faTrashAlt;
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  changeTodoStatus(todo: Todo){
    this.todoService.updateTodos(todo);
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodos(todo);
  }

}
