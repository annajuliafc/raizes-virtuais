import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RuralProducer } from 'src/app/models/RuralProducer';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-rural-producer-form',
  templateUrl: './rural-producer-form.component.html',
  styleUrls: ['./rural-producer-form.component.scss'],
})
export class RuralProducerFormComponent {
  @Output() onSubmit = new EventEmitter<RuralProducer>();
  @Input() ruralProducerToEdit: RuralProducer | null = null;

  ruralProducerForm!: FormGroup;
  plantedCrops!: FormGroup;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.ruralProducerFormInit();
  }

  ruralProducerFormInit() {
    this.plantedCrops = new FormGroup({
      soy: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.plantedCrops.soy : false),
      corn: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.plantedCrops.corn : false),
      cotton: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.plantedCrops.cotton : false),
      coffee: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.plantedCrops.coffee : false),
      sugarCane: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.plantedCrops.sugarCane : false),
    });

    this.ruralProducerForm = new FormGroup(
      {
        document: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.document : '', [Validators.required]),
        name: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.name : '', [Validators.required]),
        farmName: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.farmName : '', [Validators.required]),
        city: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.city : '', [Validators.required]),
        state: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.state : '', [Validators.required]),
        farmTotalArea: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.farmTotalArea : '', [Validators.required]),
        arableArea: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.arableArea : '', [Validators.required]),
        vegetationArea: new FormControl(this.ruralProducerToEdit ? this.ruralProducerToEdit.vegetationArea : '', [Validators.required]),
        plantedCrops: this.plantedCrops,
      },
      { validators: this.areaExceededValidation() }
    );
  }

  getControl(controlName: string): AbstractControl {
    return this.ruralProducerForm.get(controlName)!;
  }

  formatCpfCnpj() {
    if (this.getControl('document').valid) {
      let formattedCpfCnpj: string;
      if (this.getControl('document').value.length >= 14) {
        formattedCpfCnpj = cnpj.format(this.getControl('document').value);
      } else {
        formattedCpfCnpj = cpf.format(this.getControl('document').value);
      }
      this.getControl('document').setValue(formattedCpfCnpj);
    }
  }

  ruralProducerSubmit() {
    if (this.ruralProducerForm.invalid) {
      this.messageService.clear();
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Verifique os dados inseridos e tente novamente!',
      });
    }
    this.onSubmit.emit(this.ruralProducerForm.value);
  }

  areaExceededValidation(): ValidatorFn {
    return (control: AbstractControl) => {
      const farmTotalAreaControl = control.get('farmTotalArea');
      const arableAreaControl = control.get('arableArea');
      const vegetationAreaControl = control.get('vegetationArea');

      if (
        !farmTotalAreaControl ||
        !arableAreaControl ||
        !vegetationAreaControl
      ) {
        return null;
      }

      const farmTotalArea = farmTotalAreaControl.value;
      const arableArea = arableAreaControl.value;
      const vegetationArea = vegetationAreaControl.value;

      const totalArea = parseFloat(farmTotalArea);
      const sumArea = parseFloat(arableArea) + parseFloat(vegetationArea);

      if (sumArea > totalArea) {
        farmTotalAreaControl.setErrors({ areaExceeded: true });
        arableAreaControl.setErrors({ areaExceeded: true });
        vegetationAreaControl.setErrors({ areaExceeded: true });
        return { areaExceeded: true };
      } else {
        farmTotalAreaControl.setErrors(null);
        arableAreaControl.setErrors(null);
        vegetationAreaControl.setErrors(null);
        return null;
      }
    };
  }
}
