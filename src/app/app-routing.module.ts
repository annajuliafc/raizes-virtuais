import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RuralProducerRegisterComponent } from './components/rural-producer/rural-producer-register/rural-producer-register.component';
import { RuralProducerTableComponent } from './components/rural-producer/rural-producer-table/rural-producer-table.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'produtores', component: RuralProducerTableComponent},
  { path: 'cadastrar', component: RuralProducerRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
