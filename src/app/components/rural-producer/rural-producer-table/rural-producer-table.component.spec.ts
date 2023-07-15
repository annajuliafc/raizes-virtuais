import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralProducerTableComponent } from './rural-producer-table.component';

describe('RuralProducerTableComponent', () => {
  let component: RuralProducerTableComponent;
  let fixture: ComponentFixture<RuralProducerTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuralProducerTableComponent]
    });
    fixture = TestBed.createComponent(RuralProducerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
