import { TestBed } from '@angular/core/testing';

import { RuralProducerService } from './rural-producer.service';

describe('RuralProducerService', () => {
  let service: RuralProducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuralProducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
