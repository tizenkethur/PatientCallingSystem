import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'sorszamoszto-automata',
        loadChildren: () =>
          import(
            'src/app/features/serial-number-machine/serial-number-machine.module'
          ).then((m) => m.SerialNumberMachineModule),
      },
      {
        path: 'kozponti-kijelzo',
        loadChildren: () =>
          import('src/app/features/center-screen/center-screen.module').then(
            (m) => m.CenterScreenModule
          ),
      },
      {
        path: 'behivo-felulet',
        loadChildren: () =>
          import(
            'src/app/features/calling-controller/calling-controller.module'
          ).then((m) => m.CallingControllerModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
