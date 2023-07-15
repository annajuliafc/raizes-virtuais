import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralProducerComponent } from './rural-producer.component';

describe('RuralProducerComponent', () => {
  let component: RuralProducerComponent;
  let fixture: ComponentFixture<RuralProducerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuralProducerComponent]
    });
    fixture = TestBed.createComponent(RuralProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
