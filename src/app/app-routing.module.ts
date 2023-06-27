import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sorszamoszto-automata',
    loadChildren: () =>
      import(
        'src/app/features/serial-number-machine/serial-number-machine.module'
      ).then((m) => m.SerialNumberMachineModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
