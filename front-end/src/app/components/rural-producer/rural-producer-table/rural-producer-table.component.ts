import { Component } from '@angular/core';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { RuralProducer } from 'src/app/models/RuralProducer';
import { RuralProducerService } from 'src/app/services/rural-producer.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ruralProducerSearch();
  }

  getState() {
    let state: string | null;
    this.route.paramMap.subscribe((params) => {
      state = params.get('state');
      this.stateAlert(state);
    });
  }

  stateAlert(state: string | null) {
    if (state == 'cadastrado') {
      this.messageService.clear();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Produtor rural cadastrado com sucesso!',
      });
    } else if (state == 'editado') {
      this.messageService.clear();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Produtor rural atualizado com sucesso!',
      });
    }
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

  producerDelete(producer: RuralProducer) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esse produtor?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.ruralProducerService.deleteRuralProducer(producer).subscribe({
          next: (response) => {
            this.ruralProducerSearch();
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
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'O produtor foi deletado com sucesso!',
        });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Cancelado',
              detail: 'A exclusão do produtor foi cancelada!',
            });
            break;
        }
      },
    });
  }
}
