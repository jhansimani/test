import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDivisionComponent } from './dynamic-division.component';

const routes: Routes = [{ path: '', component: DynamicDivisionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivisionRoutingModule { }
