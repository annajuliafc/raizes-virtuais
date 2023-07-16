import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RuralProducer } from 'src/app/models/RuralProducer';
import { MessageService } from 'primeng/api';
import { States } from 'src/app/models/States';

@Component({
  selector: 'app-rural-producer-form',
  templateUrl: './rural-producer-form.component.html',
  styleUrls: ['./rural-producer-form.component.scss'],
})
export class RuralProducerFormComponent implements OnChanges {
  @Output() onSubmit = new EventEmitter<RuralProducer>();
  @Input() ruralProducerToEdit: RuralProducer | null = null;

  ruralProducerForm!: FormGroup;
  plantedCrops!: FormGroup;
  states: States[] = [
    { acronym: 'AC', name: 'Acre' },
    { acronym: 'AL', name: 'Alagoas' },
    { acronym: 'AP', name: 'Amapá' },
    { acronym: 'AM', name: 'Amazonas' },
    { acronym: 'BA', name: 'Bahia' },
    { acronym: 'CE', name: 'Ceará' },
    { acronym: 'DF', name: 'Distrito Federal' },
    { acronym: 'ES', name: 'Espírito Santo' },
    { acronym: 'GO', name: 'Goiás' },
    { acronym: 'MA', name: 'Maranhão' },
    { acronym: 'MT', name: 'Mato Grosso' },
    { acronym: 'MS', name: 'Mato Grosso do Sul' },
    { acronym: 'MG', name: 'Minas Gerais' },
    { acronym: 'PA', name: 'Pará' },
    { acronym: 'PB', name: 'Paraíba' },
    { acronym: 'PR', name: 'Paraná' },
    { acronym: 'PE', name: 'Pernambuco' },
    { acronym: 'PI', name: 'Piauí' },
    { acronym: 'RJ', name: 'Rio de Janeiro' },
    { acronym: 'RN', name: 'Rio Grande do Norte' },
    { acronym: 'RS', name: 'Rio Grande do Sul' },
    { acronym: 'RO', name: 'Rondônia' },
    { acronym: 'RR', name: 'Roraima' },
    { acronym: 'SC', name: 'Santa Catarina' },
    { acronym: 'SP', name: 'São Paulo' },
    { acronym: 'SE', name: 'Sergipe' },
    { acronym: 'TO', name: 'Tocantins' },
  ];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.ruralProducerFormInit();
  }

  ngOnChanges() {
    this.ruralProducerFormInit();
  }

  ruralProducerFormInit() {
    this.plantedCrops = new FormGroup({
      soy: new FormControl(
        this.ruralProducerToEdit
          ? this.ruralProducerToEdit.plantedCrops.soy
          : false
      ),
      corn: new FormControl(
        this.ruralProducerToEdit
          ? this.ruralProducerToEdit.plantedCrops.corn
          : false
      ),
      cotton: new FormControl(
        this.ruralProducerToEdit
          ? this.ruralProducerToEdit.plantedCrops.cotton
          : false
      ),
      coffee: new FormControl(
        this.ruralProducerToEdit
          ? this.ruralProducerToEdit.plantedCrops.coffee
          : false
      ),
      sugarCane: new FormControl(
        this.ruralProducerToEdit
          ? this.ruralProducerToEdit.plantedCrops.sugarCane
          : false
      ),
    });

    this.ruralProducerForm = new FormGroup(
      {
        id: new FormControl(
          this.ruralProducerToEdit ? this.ruralProducerToEdit.id : ''
        ),
        document: new FormControl(
          this.ruralProducerToEdit ? this.ruralProducerToEdit.document : ''
        ),
        name: new FormControl(
          this.ruralProducerToEdit ? this.ruralProducerToEdit.name : ''
        ),
        farmName: new FormControl(
          this.ruralProducerToEdit ? this.ruralProducerToEdit.farmName : ''
        ),
        city: new FormControl(
          this.ruralProducerToEdit ? this.ruralProducerToEdit.city : ''
        ),
        state: new FormControl(
          this.ruralProducerToEdit ? this.ruralProducerToEdit.state : ''
        ),
        farmTotalArea: new FormControl(
          this.ruralProducerToEdit ? this.ruralProducerToEdit.farmTotalArea : ''
        ),
        arableArea: new FormControl(
          this.ruralProducerToEdit ? this.ruralProducerToEdit.arableArea : ''
        ),
        vegetationArea: new FormControl(
          this.ruralProducerToEdit
            ? this.ruralProducerToEdit.vegetationArea
            : ''
        ),
        plantedCrops: this.plantedCrops,
      },
      { validators: this.areaExceededValidation() }
    );
  }

  formatCpfCnpj() {
    if (this.ruralProducerForm.controls['document'].valid) {
      let formattedCpfCnpj: string;
      if (this.ruralProducerForm.controls['document'].value.length >= 14) {
        formattedCpfCnpj = cnpj.format(
          this.ruralProducerForm.controls['document'].value
        );
      } else {
        formattedCpfCnpj = cpf.format(
          this.ruralProducerForm.controls['document'].value
        );
      }
      this.ruralProducerForm.controls['document'].setValue(formattedCpfCnpj);
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
    } else {
      this.onSubmit.emit(this.ruralProducerForm.value);
    }
  }

  areaExceededValidation(): ValidatorFn {
    return (control: AbstractControl) => {
      const farmTotalAreaControl = control.get('farmTotalArea');
      const arableAreaControl = control.get('arableArea');
      const vegetationAreaControl = control.get('vegetationArea');

      if (farmTotalAreaControl && arableAreaControl && vegetationAreaControl) {
        const farmTotalArea = parseFloat(farmTotalAreaControl.value);
        const arableArea = parseFloat(arableAreaControl.value);
        const vegetationArea = parseFloat(vegetationAreaControl.value);

        if (arableArea + vegetationArea > farmTotalArea) {
          farmTotalAreaControl.setErrors({ areaExceeded: true });
          arableAreaControl.setErrors({ areaExceeded: true });
          vegetationAreaControl.setErrors({ areaExceeded: true });
          return { areaExceeded: true };
        } else if (
          arableArea + vegetationArea < farmTotalArea ||
          (farmTotalAreaControl.value.length > 0 &&
            arableAreaControl.value.length > 0 &&
            vegetationAreaControl.value.length > 0) ||
          farmTotalAreaControl.value.length == 0 ||
          arableAreaControl.value.length == 0 ||
          vegetationAreaControl.value.length == 0
        ) {
          farmTotalAreaControl.setErrors(null);
          arableAreaControl.setErrors(null);
          vegetationAreaControl.setErrors(null);
        }
      }

      return null;
    };
  }
}
