import { Component, OnInit } from '@angular/core';
import {Todo} from "./../../model/todo";

import { v4 as uuidv4 } from "uuid";
import {TodoService} from  "./../../services/todo.service";
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle: string = "";
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    const newTodo = {
      id: uuidv4(),
      title: this.todoTitle,
      isComplete: false,
      date: new Date(),
    };

    this.todoService.addTodos(newTodo);
    this.todoTitle=""
  }

}
