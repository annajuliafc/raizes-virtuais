import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralProducerEditComponent } from './rural-producer-edit.component';

describe('RuralProducerEditComponent', () => {
  let component: RuralProducerEditComponent;
  let fixture: ComponentFixture<RuralProducerEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuralProducerEditComponent]
    });
    fixture = TestBed.createComponent(RuralProducerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
