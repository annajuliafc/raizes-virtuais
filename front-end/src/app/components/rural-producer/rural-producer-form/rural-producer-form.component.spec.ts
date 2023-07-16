import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralProducerFormComponent } from './rural-producer-form.component';

describe('RuralProducerFormComponent', () => {
  let component: RuralProducerFormComponent;
  let fixture: ComponentFixture<RuralProducerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuralProducerFormComponent]
    });
    fixture = TestBed.createComponent(RuralProducerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
