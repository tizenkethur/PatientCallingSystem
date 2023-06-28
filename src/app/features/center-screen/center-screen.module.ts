import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CenterScreenRoutingModule } from './center-screen-routing.module';

@NgModule({
  imports: [CenterScreenRoutingModule, SharedModule],
})
export class CenterScreenModule {}
