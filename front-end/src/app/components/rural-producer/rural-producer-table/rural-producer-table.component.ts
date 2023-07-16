import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RuralProducer } from 'src/app/models/RuralProducer';
import { RuralProducerService } from 'src/app/services/rural-producer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rural-producer-table',
  templateUrl: './rural-producer-table.component.html',
  styleUrls: ['./rural-producer-table.component.scss'],
})
export class RuralProducerTableComponent {
  ruralProducers!: RuralProducer[];
  loading: boolean = true;

  constructor(
    private messageService: MessageService,
    private ruralProducerService: RuralProducerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ruralProducerSearch();
  }

  ruralProducerSearch() {
    this.ruralProducerService.listRuralProducers().subscribe({
      next: (response) => {
        this.ruralProducers = response;
      },
      error: (error) => {
        this.loading = false;
        this.messageService.clear();
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'Erro ao buscar os produtores rurais, recarregue a página ou tente novamente mais tarde!',
        });
      },
    });
  }

  producerEdit(producer: RuralProducer) {
    const producerId = producer.id;
    this.router.navigate(['/editar', producerId]);
  }

  producerDelete(producer: RuralProducer) {}
}
