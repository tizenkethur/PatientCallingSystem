import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CallingControllerRoutingModule } from './calling-controller-routing.module';

@NgModule({
  imports: [CallingControllerRoutingModule, SharedModule],
})
export class CallingControllerModule {}
