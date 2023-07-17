import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsComponent } from './graphics.component';
import { DashboardModule } from '../dashboard.module';

describe(GraphicsComponent.name, () => {
  let fixture: ComponentFixture<GraphicsComponent>;
  let component: GraphicsComponent;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [DashboardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the chart data for quantityFarmsPerState input', () => {
    fixture.detectChanges();
    const quantityFarmsPerState = [
      { stateName: 'State 1', quantity: 10 },
      { stateName: 'State 2', quantity: 20 },
    ];

    component.quantityFarmsPerState = quantityFarmsPerState;
    component.ngOnInit();

    expect(component.chartData.labels.length).toEqual(2);
    expect(component.chartData.datasets.length).toEqual(1);
    expect(component.chartData.datasets[0].data).toEqual([10, 20]);
  });

  it('should set the chart data for quantityFarmsPerCrop input', () => {
    fixture.detectChanges();
    const quantityFarmsPerCrop = [
      { cropName: 'Crop 1', quantity: 5 },
      { cropName: 'Crop 2', quantity: 15 },
    ];

    component.quantityFarmsPerCrop = quantityFarmsPerCrop;
    component.ngOnInit();

    expect(component.chartData.labels.length).toEqual(2);
    expect(component.chartData.datasets.length).toEqual(1);
    expect(component.chartData.datasets[0].data).toEqual([5, 15]);
  });

  it('should set the chart data for dashboardData input', () => {
    fixture.detectChanges();
    const dashboardData = {
      totalArableArea: 1000,
      totalVegetationArea: 500,
      totalFarmersQuantity: 0,
      totalFarmArea: 0,
      quantityFarmsPerState: [],
      quantityFarmsPerCrop: [],
    };

    component.dashboardData = dashboardData;
    component.ngOnInit();

    expect(component.chartData.labels.length).toEqual(2);
    expect(component.chartData.datasets.length).toEqual(1);
    expect(component.chartData.datasets[0].data).toEqual([1000, 500]);
  });
});
