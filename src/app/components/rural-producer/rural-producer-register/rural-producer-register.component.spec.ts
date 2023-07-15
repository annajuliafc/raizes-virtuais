import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralProducerRegisterComponent } from './rural-producer-register.component';

describe('RuralProducerRegisterComponent', () => {
  let component: RuralProducerRegisterComponent;
  let fixture: ComponentFixture<RuralProducerRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuralProducerRegisterComponent]
    });
    fixture = TestBed.createComponent(RuralProducerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
