import { Component, OnInit } from '@angular/core';
import { Subscription, timer, switchMap } from 'rxjs';
import { BehivoService } from 'src/app/core/services/behivo.service';
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

  subscription: Subscription;

  constructor(private behivoService: BehivoService) {}

  ngOnInit(): void {
    this.behivoService
      .szobaListaLekeres()
      .subscribe((szobaLista) => (this.szobaLista = szobaLista));
  }

  // TODO: add a new component, wrap this to ngOnInit
  varakozoListaLekeres(szobaSzam: number) {
    this.subscription = timer(0, 1000)
      .pipe(switchMap(() => this.behivoService.varakozoListaLekeres(szobaSzam)))
      .subscribe((varakozoLista) => {
        this.varakozoLista = varakozoLista;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
