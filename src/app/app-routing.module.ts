import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('src/app/features/main/main.module').then((m) => m.MainModule),
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
