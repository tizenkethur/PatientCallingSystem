import { RouterModule, Routes } from '@angular/router';
import { SerialNumberMachineComponent } from './serial-number-machine.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: SerialNumberMachineComponent }];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class SerialNumberMachineRoutingModule {}
