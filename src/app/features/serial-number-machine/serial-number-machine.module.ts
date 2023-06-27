import { SerialNumberMachineRoutingModule } from './serial-number-machine-routing.module';
import { NgModule } from '@angular/core';
import { SerialNumberMachineComponent } from './serial-number-machine.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SerialNumberMachineComponent],
  imports: [SerialNumberMachineRoutingModule, SharedModule],
})
export class SerialNumberMachineModule {}
