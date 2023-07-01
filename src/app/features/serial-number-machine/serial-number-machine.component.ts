import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SerialNumberMachineService } from 'src/app/core/services/serial-number-machine.service';
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

  constructor(private serialNumberMachineService: SerialNumberMachineService) {}

  ngOnInit() {
    this.serialNumberMachineService
      .vizsgalatListaLekeres()
      .subscribe((vizsgalatLista) => (this.vizsgalatLista = vizsgalatLista));
  }

  get taj(): AbstractControl | null {
    return this.form.get('taj');
  }

  vizsgalatValasztas(vizsgalatKod: string, taj: string) {
    this.serialNumberMachineService
      .vizsgalatValasztas(vizsgalatKod, taj)
      .subscribe((sorszamAdat) => (this.sorszamAdat = sorszamAdat));
  }
}
