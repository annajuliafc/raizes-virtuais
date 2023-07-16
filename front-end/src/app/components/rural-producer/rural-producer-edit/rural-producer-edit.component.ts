import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RuralProducer } from 'src/app/models/RuralProducer';
import { RuralProducerService } from 'src/app/services/rural-producer.service';

@Component({
  selector: 'app-rural-producer-edit',
  templateUrl: './rural-producer-edit.component.html',
  styleUrls: ['./rural-producer-edit.component.scss'],
})
export class RuralProducerEditComponent {
  ruralProducerToEdit!: RuralProducer;

  producerId!: number;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private ruralProducerService: RuralProducerService
  ) {}

  ngOnInit() {
    this.getProducerId();
    this.getProducerById();
  }

  getProducerId() {
    this.route.paramMap.subscribe((params) => {
      this.producerId = Number(params.get('id'));
    });
  }

  getProducerById() {
    this.ruralProducerService.getRuralProducer(this.producerId).subscribe({
      next: (response) => {
        this.ruralProducerToEdit = response;
      },
      error: (error) => {
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

  newRuralProducer(event: any) {
    console.log(event);
    // this.ruralProducerService.registerRuralProducer()
  }
}
