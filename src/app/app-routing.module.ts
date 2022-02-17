import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'category', component: CategoryComponent},
  {path:'categories', loadChildren:() => import('./categories/categories.module').then(m => m.CategoriesModule)},
  { path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule) },
  { path: 'timer-subject', loadChildren: () => import('./timer-subject/timer-subject.module').then(m => m.TimerSubjectModule) },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'dynamic-division', loadChildren: () => import('./dynamic-division/dynamic-division.module').then(m => m.DynamicDivisionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
