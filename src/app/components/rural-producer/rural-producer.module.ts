import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RuralProducerComponent } from './rural-producer.component';
import { RuralProducerEditComponent } from './rural-producer-edit/rural-producer-edit.component';
import { RuralProducerRegisterComponent } from './rural-producer-register/rural-producer-register.component';
import { RuralProducerFormComponent } from './rural-producer-form/rural-producer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CpfCnpjValidationDirective } from 'src/app/directives/cpf-cnpj-validation.directive';

//PrimeNG
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RuralProducerTableComponent } from './rural-producer-table/rural-producer-table.component';

@NgModule({
  declarations: [
    RuralProducerComponent,
    RuralProducerEditComponent,
    RuralProducerRegisterComponent,
    RuralProducerFormComponent,
    CpfCnpjValidationDirective,
    RuralProducerTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ToastModule
  ],
  exports: [
    RuralProducerComponent,
    RuralProducerEditComponent,
    RuralProducerRegisterComponent,
  ],
  providers: [ MessageService ],
})
export class RuralProducerModule {}
