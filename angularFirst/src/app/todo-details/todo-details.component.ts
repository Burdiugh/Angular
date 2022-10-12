import { Component, Input } from '@angular/core';
import { Priority } from '../ENUMs/enums';
import { IToDo } from '../Interfaces/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent {
  priorities: string[] = Object.keys(Priority).filter((k) => isNaN(Number(k)));
  priorityType = Priority;

  currentTodo: IToDo;

  @Input() todos: IToDo[] = [];

  constructor() {
    this.currentTodo = {
      description: '',
      isDone: false,
      date: new Date(),
      priority: 0,
    };
  }

  isDeadlineTime(date: Date): boolean {
    return new Date(date).getTime() < Date.now();
  }

  addTodo(todo: IToDo): void {
    this.todos.push(todo);
  }
}
