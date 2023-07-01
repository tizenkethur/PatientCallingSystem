import { Component, OnInit } from '@angular/core';
import { BehivoService } from 'src/app/core/services/behivo.service';
import { SorszamModell } from 'src/app/shared/models/SorszamModell';
import { SzobaInfoModell } from 'src/app/shared/models/SzobaInfoModell';
import { VizsgalatModell } from 'src/app/shared/models/VizsgalatModell';

@Component({
  selector: 'app-calling-controller',
  templateUrl: './calling-controller.component.html',
  styleUrls: ['./calling-controller.component.scss'],
})
export class CallingControllerComponent implements OnInit {
  // TODO: instead erkezesIdeje varakozasIdeje??
  varakozok: SorszamModell[];

  displayedColumns: string[] = ['sorszam', 'erkezesIdeje', 'taj'];

  vizsgalatLista: VizsgalatModell[];
  szobaLista: SzobaInfoModell[];

  constructor(private behivoService: BehivoService) {}

  ngOnInit(): void {
    this.behivoService
      .szobaListaLekeres()
      .subscribe((szobaLista) => (this.szobaLista = szobaLista));
    // this.callingScreenService
    //   .varakozoListaLekeres()
    //   .subscribe((varakozoLista) => (this.varakozok = varakozoLista));
  }
}
