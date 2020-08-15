import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo-list',
    loadChildren: () => import('./modules/todo-list/todo-list.module').then(m => m.TodoListModule)
  },
  {
    path: 'boids',
    loadChildren: () => import('./modules/boids/boids.module').then(m => m.BoidsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
