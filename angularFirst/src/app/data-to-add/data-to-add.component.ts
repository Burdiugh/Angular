import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priority } from '../ENUMs/enums';
import { IToDo } from '../Interfaces/todo';

@Component({
  selector: 'app-data-to-add',
  templateUrl: './data-to-add.component.html',
  styleUrls: ['./data-to-add.component.css'],
})
export class DataToAddComponent implements OnInit {
  currentTodo: IToDo;

  priorities: string[] = Object.keys(Priority).filter((k) => isNaN(Number(k)));
  priorityType = Priority;

  @Output() addEvent = new EventEmitter<IToDo>();

  constructor() {
    this.currentTodo = {
      description: '',
      isDone: false,
      date: new Date(),
      priority: 0,
    };
  }

  ngOnInit(): void {}

  createToDo(): void {
    this.addEvent.emit(this.currentTodo);
  }
}
