import { Component } from '@angular/core';
import { TodosCollection } from './collections/collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularFirst';

  // inProgressCollection = TodosCollection.filter((t) => !t.isDone);
  // doneCollection = TodosCollection.filter((t) => t.isDone);
}
