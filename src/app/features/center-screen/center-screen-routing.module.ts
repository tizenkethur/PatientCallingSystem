import { RouterModule, Routes } from '@angular/router';
import { CenterScreenComponent } from './center-screen.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: CenterScreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterScreenRoutingModule {}
