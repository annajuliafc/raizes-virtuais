import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CpfCnpjValidationDirective } from './cpf-cnpj-validation.directive';

// describe('CpfCnpjValidationDirective', () => {
//   it('should create an instance', () => {
//     const directive = new CpfCnpjValidationDirective();
//     expect(directive).toBeTruthy();
//   });
// });

describe('CpfCnpjValidationDirective', () => {
  let directive: CpfCnpjValidationDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CpfCnpjValidationDirective],
    });

    directive = TestBed.inject(CpfCnpjValidationDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should return null if control value is empty', () => {
    const control = new FormControl('');
    const result = directive.validate(control);
    expect(result).toBeNull();
  });

  it('should return null if control value is a valid CPF', () => {
    const validCpf = '123.456.789-09';
    const control = new FormControl(validCpf);
    const result = directive.validate(control);
    expect(result).toBeNull();
  });

  it('should return null if control value is a valid CNPJ', () => {
    const validCnpj = '12.345.678/0001-90';
    const control = new FormControl(validCnpj);
    const result = directive.validate(control);
    expect(result).toBeNull();
  });

  it('should return error object if control value is an invalid CPF and CNPJ', () => {
    const invalidCpfCnpj = '123456789'; // Invalid CPF and CNPJ format
    const control = new FormControl(invalidCpfCnpj);
    const result = directive.validate(control);
    expect(result).toEqual({ cpfCnpjValidation: true });
  });

  it('should return error object if control value is a valid CPF followed by invalid characters', () => {
    const validCpf = '123.456.789-09';
    const invalidCpf = validCpf + 'abc';
    const control = new FormControl(invalidCpf);
    const result = directive.validate(control);
    expect(result).toEqual({ cpfCnpjValidation: true });
  });

  it('should return error object if control value is a valid CNPJ followed by invalid characters', () => {
    const validCnpj = '12.345.678/0001-90';
    const invalidCnpj = validCnpj + 'xyz';
    const control = new FormControl(invalidCnpj);
    const result = directive.validate(control);
    expect(result).toEqual({ cpfCnpjValidation: true });
  });
});