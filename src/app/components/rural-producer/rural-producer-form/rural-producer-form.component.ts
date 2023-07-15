import { Component, EventEmitter, Output } from '@angular/core';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import {
  AbstractControl,
  FormControl,
  FormGroup,
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

  ruralProducerForm!: FormGroup;
  plantedCrops!: FormGroup;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.ruralProducerFormInit();
  }

  ruralProducerFormInit() {
    this.plantedCrops = new FormGroup({
      soy: new FormControl(false),
      corn: new FormControl(false),
      cotton: new FormControl(false),
      coffee: new FormControl(false),
      sugarCane: new FormControl(false),
    });

    this.ruralProducerForm = new FormGroup({
      document: new FormControl('', [Validators.required]),
      producerName: new FormControl('', [Validators.required]),
      farmName: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      farmTotalArea: new FormControl('', [Validators.required]),
      arableArea: new FormControl('', [Validators.required]),
      vegetationArea: new FormControl('', [Validators.required]),
      plantedCrops: this.plantedCrops,
    });
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
}
