import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SerialNumberMachineService } from 'src/app/core/services/serial-number-machine.service';
import { ExaminationListViewModel } from 'src/app/shared/models/ExaminationListViewModel';
import { SerialNumberViewModel } from 'src/app/shared/models/SerialNumberViewModel';
import { cdvValidator } from 'src/app/shared/validators/CDV.validator';

@Component({
  selector: 'serial-number-machine',
  templateUrl: './serial-number-machine.component.html',
  styleUrls: ['./serial-number-machine.component.scss'],
})
export class SerialNumberMachineComponent implements OnInit {
  form = new FormGroup({
    tajNumber: new FormControl('', [
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern('^[0-9]*$'),
      cdvValidator.isCdvInvalid,
    ]),
  });

  examinationList: ExaminationListViewModel = {
    examinations: [
      {
        kod: 'V00',
        megnevezes: 'Általános vizsgálat',
      },
      {
        kod: 'V01',
        megnevezes: 'Vérnyomás mérés',
      },
      {
        kod: 'V02',
        megnevezes: 'Vérvétel',
      },
      {
        kod: 'V03',
        megnevezes: 'Háziorvosi vizsgálat',
      },
      {
        kod: 'V04',
        megnevezes: 'Üzemorvosi vizsgálat',
      },
      {
        kod: 'V05',
        megnevezes: 'Bőrgyógyászat',
      },
    ],
  };

  serialNumberData: SerialNumberViewModel = {
    sorszam: 106,
    vizsgalatKod: 'V02',
    taj: '',
    erkezesIdeje: '2023-06-28T21:23:34.055895242',
    varakozok: 2,
  };

  constructor(private serialNumberMachineService: SerialNumberMachineService) {}

  ngOnInit() {
    this.serialNumberMachineService
      .getExaminationList()
      .subscribe((examinationList) => console.log(examinationList));
  }

  get tajNumber(): AbstractControl | null {
    return this.form.get('tajNumber');
  }

  chooseExamination(vizsgalatKod: string, taj: string) {
    this.serialNumberMachineService
      .chooseExamination(vizsgalatKod, taj)
      .subscribe(
        (serialNumberData) => (this.serialNumberData = serialNumberData)
      );
  }
}
