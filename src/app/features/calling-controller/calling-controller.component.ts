import { Component } from '@angular/core';
import { BehivoModell } from 'src/app/shared/models/BehivoModell';

@Component({
  selector: 'app-calling-controller',
  templateUrl: './calling-controller.component.html',
  styleUrls: ['./calling-controller.component.scss'],
})
export class CallingControllerComponent {
  // TODO: instead erkezesIdeje varakozasIdeje??
  varakozok: BehivoModell[] = [
    { sorszam: 105, erkezesIdeje: '2023. 06. 29. 09:30', taj: '' },
    { sorszam: 110, erkezesIdeje: '2023. 06. 29. 09:50', taj: '' },
    { sorszam: 111, erkezesIdeje: '2023. 06. 29. 09:52', taj: '137333367' },
  ];

  displayedColumns: string[] = ['sorszam', 'erkezesIdeje', 'taj'];
}
