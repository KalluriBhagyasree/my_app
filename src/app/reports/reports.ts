import { Component, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.html',
  styleUrls: ['./reports.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule, TitleCasePipe]
})
export class Reports {
  isBrowser: boolean;
  selectedRange: string = 'daily';

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  energyChartType: any = 'bar';
  energyChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      { label: 'Energy (kWh)', data: [120, 150, 100, 130, 170, 160, 140], backgroundColor: 'skyblue' },
      { label: 'Performance (%)', data: [80, 85, 75, 90, 95, 88, 82], backgroundColor: 'lightgreen' }
    ]
  };

  energyChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: { legend: { display: true } },
  scales: {
    y: {
      beginAtZero: true,
      type: 'linear',
      position: 'left',
      title: { display: true, text: 'Energy (kWh)' }
    },
    y1: {
      beginAtZero: true,
      type: 'linear',
      position: 'right',
      title: { display: true, text: 'Performance (%)' },
      grid: { drawOnChartArea: false } // prevent grid overlap
    }
  }
};


  updateChart() {
    if (this.selectedRange === 'daily') {
      this.energyChartData = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          { label: 'Energy (kWh)', data: [120, 150, 100, 130, 170, 160, 140], backgroundColor: 'skyblue',  yAxisID: 'y' },
          { label: 'Performance (%)', data: [80, 85, 75, 90, 95, 88, 82], backgroundColor: 'lightgreen',  yAxisID: 'y1' }
        ]
      };
    } else if (this.selectedRange === 'monthly') {
      this.energyChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          { label: 'Energy (kWh)', data: [3000, 2800, 3200, 3100, 3500, 3600, 3400], backgroundColor: 'skyblue',  yAxisID: 'y' },
          { label: 'Performance (%)', data: [78, 82, 80, 85, 88, 90, 86], backgroundColor: 'lightgreen' , yAxisID: 'y1'}
        ]
      };
    } else {
      this.energyChartData = {
        labels: ['2023', '2024', '2025', '2026', '2027'],
        datasets: [
          { label: 'Energy (kWh)', data: [36000, 38000, 40000, 42000, 44000], backgroundColor: 'skyblue',  yAxisID: 'y' },
          { label: 'Performance (%)', data: [85, 88, 90, 92, 95], backgroundColor: 'lightgreen',  yAxisID: 'y1' }
        ]
      };
    }
  }
}
