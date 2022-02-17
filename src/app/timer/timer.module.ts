import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { FormsModule } from '@angular/forms';
import { FormatdatePipe } from './formatdate.pipe';
// import { DatePipe } from '../date.pipe';


@NgModule({
  declarations: [
    TimerComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    FormatdatePipe
    
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ],
  providers:[DatePipe]
})
export class TimerModule { }
