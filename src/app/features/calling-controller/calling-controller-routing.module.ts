import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallingControllerComponent } from './calling-controller.component';

const routes: Routes = [
  {
    path: '',
    component: CallingControllerComponent,
    children: [
      { path: '1', component: CallingControllerComponent },
      { path: '2', component: CallingControllerComponent },
      { path: '3', component: CallingControllerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallingControllerRoutingModule {}
