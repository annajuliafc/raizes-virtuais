import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RuralProducerModule } from './components/rural-producer/rural-producer.module';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RuralProducerModule,
    DashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    ButtonModule,
    TabMenuModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
