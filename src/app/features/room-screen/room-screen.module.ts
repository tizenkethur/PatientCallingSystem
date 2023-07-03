import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomScreenComponent } from './room-screen.component';
import { RoomScreenRoutingModule } from './room-screen-routing.module';

@NgModule({
  declarations: [RoomScreenComponent],
  imports: [RoomScreenRoutingModule, SharedModule],
})
export class RoomScreenModule {}
