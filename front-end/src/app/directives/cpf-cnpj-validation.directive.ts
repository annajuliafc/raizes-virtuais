import { Directive } from '@angular/core';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[cpfCnpjValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CpfCnpjValidationDirective,
      multi: true,
    },
  ],
})

export class CpfCnpjValidationDirective implements Validator {
  
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const cpfCnpj = control.value;

    const isValidCpf = cpf.isValid(cpfCnpj);

    if (isValidCpf) {
      return null;
    }

    const isValidCnpj = cnpj.isValid(cpfCnpj);

    if (isValidCnpj) {
      return null;
    }

    return { cpfCnpjValidation: true };
  }
}
