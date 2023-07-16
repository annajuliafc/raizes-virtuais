import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    DashboardComponent,
    GraphicsComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    CardModule,
    ProgressSpinnerModule
  ]
})
export class DashboardModule { }
