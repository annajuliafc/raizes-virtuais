import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Directives
import { CpfCnpjValidationDirective } from 'src/app/directives/cpf-cnpj-validation.directive';

//Components
import { RuralProducerEditComponent } from './rural-producer-edit/rural-producer-edit.component';
import { RuralProducerRegisterComponent } from './rural-producer-register/rural-producer-register.component';
import { RuralProducerFormComponent } from './rural-producer-form/rural-producer-form.component';
import { RuralProducerTableComponent } from './rural-producer-table/rural-producer-table.component';

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


//PrimeNG
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    RuralProducerEditComponent,
    RuralProducerRegisterComponent,
    RuralProducerFormComponent,
    RuralProducerTableComponent,
    CpfCnpjValidationDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    ToastModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    ProgressSpinnerModule
  ],
  exports: [
    RuralProducerEditComponent,
    RuralProducerRegisterComponent,
  ],
  providers: [MessageService],
})
export class RuralProducerModule {}