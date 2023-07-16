import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/models/Dashboard';
import { QuantityFarmsPerCrop } from 'src/app/models/QuantityFarmsPerCrop';
import { QuantityFarmsPerState } from 'src/app/models/QuantityFarmsPerState';
import { GraphicsColors } from 'src/app/shared/utils/GraphicsColor';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnInit {
  @Input() quantityFarmsPerState!: QuantityFarmsPerState[];
  @Input() quantityFarmsPerCrop!: QuantityFarmsPerCrop[];
  @Input() dashboardData!: Dashboard;

  colorsBackground: string[] = GraphicsColors.backgroundColor;
  colorsBorder: string[] = GraphicsColors.hoverBackgroundColor;

  chartData: any;
  options: any;

  constructor() {}

  ngOnInit() {
    this.setGraphics();
  }

  setGraphics() {
    const createChartData = (
      labels: string[],
      data: number[],
      colorsBackground: string[],
      colorsBorder: string[]
    ) => {
      return {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colorsBackground,
            hoverBackgroundColor: colorsBorder,
          },
        ],
      };
    };

    if (this.quantityFarmsPerState) {
      const labels = this.quantityFarmsPerState.map((item) => item.stateName);
      const data = this.quantityFarmsPerState.map((item) => item.quantity);

      this.chartData = createChartData(
        labels,
        data,
        this.colorsBackground,
        this.colorsBorder
      );
    } else if (this.quantityFarmsPerCrop) {
      const labels = this.quantityFarmsPerCrop.map((item) => item.cropName);
      const data = this.quantityFarmsPerCrop.map((item) => item.quantity);

      this.chartData = createChartData(
        labels,
        data,
        this.colorsBackground,
        this.colorsBorder
      );
    } else if (this.dashboardData) {
      const labels = [
        'Total de área agricultável',
        'Total de área de vegetação',
      ];
      const data = [
        this.dashboardData.totalArableArea,
        this.dashboardData.totalVegetationArea,
      ];

      this.chartData = createChartData(
        labels,
        data,
        this.colorsBackground,
        this.colorsBorder
      );
    }

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }
}
