import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RuralProducerService } from 'src/app/services/rural-producer.service';

@Component({
  selector: 'app-rural-producer-register',
  templateUrl: './rural-producer-register.component.html',
  styleUrls: ['./rural-producer-register.component.scss'],
})
export class RuralProducerRegisterComponent {
  constructor(
    private ruralProducerService: RuralProducerService,
    private messageService: MessageService,
    private router: Router
  ) {}

  newRuralProducer(event: any) {
    this.ruralProducerService.registerRuralProducer(event).subscribe({
      next: (response) => {
        this.router.navigate(['/produtores', 'cadastrado']);
      },
      error: (error) => {
        this.messageService.clear();
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'Erro ao tentar cadastrar um produtor rural, recarregue a página ou tente novamente mais tarde!',
        });
      },
    });
  }
}
