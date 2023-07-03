import { Component, OnInit } from '@angular/core';
import { Subscription, switchMap, timer } from 'rxjs';
import { SzobaService } from 'src/app/core/services/szoba.service';
import { BehivottModell } from 'src/app/shared/models/BehivottModell';
import { SzobaInfoModell } from 'src/app/shared/models/SzobaInfoModell';

@Component({
  selector: 'app-room-screen',
  templateUrl: './room-screen.component.html',
  styleUrls: ['./room-screen.component.scss'],
})
export class RoomScreenComponent implements OnInit {
  szobaLista: SzobaInfoModell[];

  behivott: BehivottModell;

  subscription: Subscription;

  constructor(private szobaService: SzobaService) {}

  ngOnInit(): void {
    this.szobaService
      .szobaListaLekeres()
      .subscribe((szobaLista) => (this.szobaLista = szobaLista));
  }

  behivottLekeres(szobaszam: number) {
    this.subscription?.unsubscribe();
    this.subscription = timer(0, 3000)
      .pipe(switchMap(() => this.szobaService.behivottLekeres(szobaszam)))
      .subscribe((behivott) => (this.behivott = behivott));
  }
}
