import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RuralProducer } from '../models/RuralProducer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RuralProducerService {
  urlApi = 'https://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  registerRuralProducer(ruralProducer: RuralProducer) : Observable<RuralProducer> {
    return this.httpClient.post<RuralProducer>(this.urlApi + "/farmer", ruralProducer)
  }

  updatelProducer(ruralProducer: RuralProducer) : Observable<RuralProducer> {
    return this.httpClient.put<RuralProducer>(this.urlApi + `/farmer/${ruralProducer.id}`, ruralProducer)
  }

  deleteRuralProducer(ruralProducer: RuralProducer) : Observable<RuralProducer> {
    return this.httpClient.delete<RuralProducer>(this.urlApi + `/farmer/${ruralProducer.id}`)
  }

  listRuralProducers() : Observable<RuralProducer[]> {
    return this.httpClient.get<RuralProducer[]>(this.urlApi + "/farmer")
  }
}
