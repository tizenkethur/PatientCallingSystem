import { Component, OnInit } from '@angular/core';
import { Subscription, timer, switchMap } from 'rxjs';
import { BehivoService } from 'src/app/core/services/behivo.service';
import { SzobaService } from 'src/app/core/services/szoba.service';
import { SorszamModell } from 'src/app/shared/models/SorszamModell';
import { SzobaInfoModell } from 'src/app/shared/models/SzobaInfoModell';

@Component({
  selector: 'app-calling-controller',
  templateUrl: './calling-controller.component.html',
  styleUrls: ['./calling-controller.component.scss'],
})
export class CallingControllerComponent implements OnInit {
  // TODO: instead erkezesIdeje varakozasIdeje??
  varakozoLista: SorszamModell[];

  displayedColumns: string[] = ['sorszam', 'erkezesIdeje', 'taj'];

  szobaLista: SzobaInfoModell[];

  szobaSzam: number;

  subscription: Subscription;

  constructor(
    private szobaService: SzobaService,
    private behivoService: BehivoService
  ) {}

  ngOnInit(): void {
    this.szobaService
      .szobaListaLekeres()
      .subscribe((szobaLista) => (this.szobaLista = szobaLista));
  }

  varakozoListaLekeres(szobaSzam: number) {
    this.szobaSzam = szobaSzam;
    // TODO: check whether it works properly or not
    // this.subscription.unsubscribe();
    this.subscription = timer(0, 1000)
      .pipe(switchMap(() => this.behivoService.varakozoListaLekeres(szobaSzam)))
      .subscribe((varakozoLista) => {
        this.varakozoLista = varakozoLista;
      });
  }

  kovetkezoVarakozoBehivas(szobaSzam: number, sorszam: number) {
    this.behivoService.kovetkezoVarakozoBehivas(szobaSzam, sorszam).subscribe();
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
