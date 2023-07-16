import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/models/Dashboard';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnInit {
  @Input() graphicData!: any;

  data: any;

  options: any;
  
  constructor() {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--cyan-500'),
            documentStyle.getPropertyValue('--purple-500'),
            documentStyle.getPropertyValue('--orange-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--cyan-400'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--orange-400'),
          ],
        },
      ],
    };

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
