import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { DashboardComponent } from './dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';

//PrimeNG
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [DashboardComponent, GraphicsComponent],
  imports: [CommonModule, ChartModule, CardModule, ProgressSpinnerModule],
  exports: [DashboardComponent, GraphicsComponent],
  providers: [DashboardService, MessageService],
})
export class DashboardModule {}
