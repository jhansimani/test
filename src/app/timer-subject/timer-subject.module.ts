import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerSubjectRoutingModule } from './timer-subject-routing.module';
import { TimerSubjectComponent } from './timer-subject.component';


@NgModule({
  declarations: [
    TimerSubjectComponent
  ],
  imports: [
    CommonModule,
    TimerSubjectRoutingModule
  ]
})
export class TimerSubjectModule { }
