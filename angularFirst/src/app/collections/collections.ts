import { IToDo } from '../Interfaces/todo';

export const TodosCollection: IToDo[] = [
  {
    description: 'none',
    date: new Date('2001-05-15'),
    isDone: false,
    priority: 1,
  },
  {
    description: 'none2',
    date: new Date('2001-05-16'),
    isDone: true,
    priority: 1,
  },
];
