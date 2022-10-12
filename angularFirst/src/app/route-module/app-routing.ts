import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodoDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
