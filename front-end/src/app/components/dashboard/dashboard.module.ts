import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { DashboardComponent } from './dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';

//PrimeNG
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [DashboardComponent, GraphicsComponent],
  imports: [CommonModule, ChartModule, CardModule, ProgressSpinnerModule],
  exports: [DashboardComponent, GraphicsComponent],
})
export class DashboardModule {}
