import { Component } from '@angular/core';

@Component({
  selector: 'app-rural-producer-edit',
  templateUrl: './rural-producer-edit.component.html',
  styleUrls: ['./rural-producer-edit.component.scss']
})
export class RuralProducerEditComponent {

  newRuralProducer(event: any) {
    console.log(event)
// this.ruralProducerService.registerRuralProducer()
  }
}
