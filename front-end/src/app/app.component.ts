import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'rural-producer-manager';
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  constructor(public _router: Router) {}

  ngOnInit() {
    this.items = [
      { label: 'Overview', icon: 'pi pi-chart-pie', routerLink: 'dashboard' },
      { label: 'Produtores', icon: 'pi pi-users', routerLink: 'produtores' },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
