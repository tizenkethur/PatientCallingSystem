import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SerialNumberMachineService } from 'src/app/core/services/serial-number-machine.service';
import { ExaminationListViewModel } from 'src/app/shared/models/ExaminationListViewModel';
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

  examinationList: ExaminationListViewModel;

  constructor(private serialNumberMachineService: SerialNumberMachineService) {}
  ngOnInit() {
    this.serialNumberMachineService
      .getExaminationList()
      .subscribe((examinationList) => console.log(examinationList));
  }

  get tajNumber(): AbstractControl | null {
    return this.form.get('tajNumber');
  }
}
