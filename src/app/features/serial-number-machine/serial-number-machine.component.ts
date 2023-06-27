import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { cdvValidator } from 'src/app/shared/validators/CDV.validator';

@Component({
  selector: 'serial-number-machine',
  templateUrl: './serial-number-machine.component.html',
  styleUrls: ['./serial-number-machine.component.scss'],
})
export class SerialNumberMachineComponent {
  form = new FormGroup({
    tajNumber: new FormControl('', [
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern('^[0-9]*$'),
      cdvValidator.isCdvInvalid,
    ]),
  });

  // TODO: make a model for the examination object
  // TODO: http get request to the backend for getting the fields
  vizsgalatok = [
    { megnevezes: 'Általános vizsgálat' },
    { megnevezes: 'Vérnyomás mérés' },
    { megnevezes: 'Vérvétel' },
  
  ];

  get tajNumber(): AbstractControl | null {
    console.log(this.form.get('tajNumber'));
    return this.form.get('tajNumber');
  }
}
