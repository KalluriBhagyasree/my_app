import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from '../machines/machines.component';

const routes: Routes = [
  {path:"machine", component: MachinesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }
