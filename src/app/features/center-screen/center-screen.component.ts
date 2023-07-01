import { KozpontiKijelzoInfoModell } from './../../shared/models/KozpontiKijelzoInfoModell';
import { KijelzoService } from './../../core/services/kijelzo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-screen',
  templateUrl: './center-screen.component.html',
  styleUrls: ['./center-screen.component.scss'],
})
export class CenterScreenComponent implements OnInit {
  kozpontiKijelzoLista: KozpontiKijelzoInfoModell[];
  displayedColumns: string[] = ['sorszam', 'szoba'];

  constructor(private kijelzoService: KijelzoService) {}

  ngOnInit(): void {
    this.kijelzoService
      .kozpontiKijelzoListaLekeres()
      .subscribe(
        (kozpontiKijelzoLista) =>
          (this.kozpontiKijelzoLista = kozpontiKijelzoLista)
      );
  }
}
