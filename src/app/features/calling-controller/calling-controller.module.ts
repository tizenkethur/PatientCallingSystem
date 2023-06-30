import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CallingControllerRoutingModule } from './calling-controller-routing.module';
import { CallingControllerComponent } from './calling-controller.component';

@NgModule({
  declarations: [CallingControllerComponent],
  imports: [CallingControllerRoutingModule, SharedModule],
})
export class CallingControllerModule {}
