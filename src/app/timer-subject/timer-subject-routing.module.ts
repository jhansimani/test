import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerSubjectComponent } from './timer-subject.component';

const routes: Routes = [{ path: '', component: TimerSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerSubjectRoutingModule { }
