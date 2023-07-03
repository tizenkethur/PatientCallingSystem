import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoomScreenComponent } from './room-screen.component';

const routes: Routes = [{ path: '', component: RoomScreenComponent }];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class RoomScreenRoutingModule {}
