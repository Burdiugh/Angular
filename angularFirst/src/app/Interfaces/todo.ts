import { Priority } from '../ENUMs/enums';

export interface IToDo {
  description: string;
  date: Date;
  isDone: boolean;
  priority: Priority;
}
