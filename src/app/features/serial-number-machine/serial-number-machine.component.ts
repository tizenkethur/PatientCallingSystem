import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { VizsgalatService } from 'src/app/core/services/vizsgalat.service';
import { cdvValidator } from 'src/app/shared/validators/CDV.validator';
import { VizsgalatModell } from 'src/app/shared/models/VizsgalatModell';
import { SorszamModell } from 'src/app/shared/models/SorszamModell';

@Component({
  selector: 'serial-number-machine',
  templateUrl: './serial-number-machine.component.html',
  styleUrls: ['./serial-number-machine.component.scss'],
})
export class SerialNumberMachineComponent implements OnInit {
  form = new FormGroup({
    taj: new FormControl('', [
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern('^[0-9]*$'),
      cdvValidator.isCdvInvalid,
    ]),
  });

  vizsgalatLista: VizsgalatModell[];

  sorszamAdat: SorszamModell;

  constructor(private vizsgalatService: VizsgalatService) {}

  ngOnInit() {
    this.vizsgalatService
      .vizsgalatListaLekeres()
      .subscribe((vizsgalatLista) => (this.vizsgalatLista = vizsgalatLista));
  }

  get taj(): AbstractControl | null {
    return this.form.get('taj');
  }

  vizsgalatValasztas(vizsgalatKod: string, taj: string) {
    this.vizsgalatService
      .vizsgalatValasztas(vizsgalatKod, taj)
      .subscribe((sorszamAdat) => (this.sorszamAdat = sorszamAdat));
  }
}
