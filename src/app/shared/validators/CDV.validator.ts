import { AbstractControl, ValidationErrors } from '@angular/forms';

export class cdvValidator {
  static isCdvInvalid(control: AbstractControl<string>): ValidationErrors | null {
    const tajNum: string = control.value;

    let result: number = 0;

    for (let i: number = 0; i < tajNum.length - 1; i++) {
      if (!(i % 2)) {
        result += parseInt(tajNum[i]) * 3;
      } else {
        result += parseInt(tajNum[i]) * 7;
      }
    }

    if (tajNum[tajNum.length - 1] !== (result % 10).toString()) {
      return { isCdvInvalid: true };
    }

    return null;
  }
}
