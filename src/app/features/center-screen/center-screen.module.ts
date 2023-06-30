import { NgModule } from '@angular/core';
import { CenterScreenRoutingModule } from './center-screen-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CenterScreenComponent } from './center-screen.component';

@NgModule({
  declarations: [CenterScreenComponent],
  imports: [CenterScreenRoutingModule, SharedModule],
})
export class CenterScreenModule {}
