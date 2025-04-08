import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexTitleSubtitle,
  ApexAxisChartSeries,
  ApexXAxis
} from 'ng-apexcharts';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InvestmentsService } from '../../services/investments.service';
import { Investment } from '../../services/investments.service';
import { investmentFormJson } from '../../models/investment-form.config';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, MatButtonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router,  private investmentsService: InvestmentsService) {}

  investments: Investment[] = [];

  assetChartSeries: ApexNonAxisChartSeries = [44, 33, 23];
  assetChartOptions: ApexChart = { type: 'pie' };
  assetChartLabels = ['Stocks', 'Bonds', 'ETFs'];

  performanceSeries: ApexAxisChartSeries = [
    { name: 'Portfolio Value', data: [10000, 10500, 10300, 11000, 11500] }
  ];
  performanceChart: ApexChart = { type: 'line', height: 300 };
  performanceXAxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  };

  ngOnInit(): void {
    this.investmentsService.reloadFromStorage();
    this.investmentsService.investments$.subscribe((data) => {
      this.investments = data;
    });
  }

  goToAddInvestment() {
    this.router.navigate(['/add-investment']);
  }

}
