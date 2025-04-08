import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddInvestmentComponent } from './components/add-investment/add-investment.component';
import { ReviewInvestmentComponent } from './components/review-investment/review-investment.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-investment', component: AddInvestmentComponent },
  {
    path: 'review-investment',
    loadComponent: () =>
      import('./components/review-investment/review-investment.component').then(
        (m) => m.ReviewInvestmentComponent
      ),
  },
];
