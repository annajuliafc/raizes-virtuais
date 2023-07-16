import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Dashboard } from 'src/app/models/Dashboard';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardData!: Dashboard;
  loading: boolean = true;

  constructor(private dashboardService: DashboardService,
    private messageService: MessageService) {}

  ngOnInit() {
    this.searchDashboardData();
  }

  searchDashboardData() {
    this.dashboardService.getDashboardData().subscribe({
      next: (response) => {
        this.dashboardData = response;
      },
      error: (error) => {
        this.loading = false;
        this.messageService.clear();
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'Erro ao buscar os dados, recarregue a página ou tente novamente mais tarde!',
        });
      },
    });
  }
}
