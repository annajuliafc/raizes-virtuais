import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';



@NgModule({
  declarations: [
    DashboardComponent,
    GraphicsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
