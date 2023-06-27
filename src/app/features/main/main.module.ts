import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [MainRoutingModule, SharedModule],
})
export class MainModule {}
