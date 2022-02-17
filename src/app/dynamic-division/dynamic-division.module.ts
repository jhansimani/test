import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivisionRoutingModule } from './dynamic-division-routing.module';
import { DynamicDivisionComponent } from './dynamic-division.component';


@NgModule({
  declarations: [
    DynamicDivisionComponent
  ],
  imports: [
    CommonModule,
    DynamicDivisionRoutingModule
  ]
})
export class DynamicDivisionModule { }
