import { BehivottModell } from '../../shared/models/BehivottModell';
import { KijelzoService } from './../../core/services/kijelzo.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-center-screen',
  templateUrl: './center-screen.component.html',
  styleUrls: ['./center-screen.component.scss'],
})
export class CenterScreenComponent implements OnInit {
  kozpontiKijelzoLista: BehivottModell[];
  displayedColumns: string[] = ['sorszam', 'szoba'];

  subscription: Subscription;

  constructor(private kijelzoService: KijelzoService) {}

  ngOnInit(): void {
    this.subscription = timer(0, 3000)
      .pipe(switchMap(() => this.kijelzoService.kozpontiKijelzoListaLekeres()))
      .subscribe((kozpontiKijelzoLista) => {
        this.kozpontiKijelzoLista = kozpontiKijelzoLista;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
