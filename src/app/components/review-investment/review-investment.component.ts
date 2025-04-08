import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentsService, Investment } from '../../services/investments.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-investment',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './review-investment.component.html',
  styleUrl: './review-investment.component.scss'
})
export class ReviewInvestmentComponent implements OnInit {
  
  displayedColumns: string[] = ['assetType', 'quantity', 'purchasePrice', 'purchaseDate'];
  dataSource = new MatTableDataSource<Investment>([]);

  constructor(private investmentsService: InvestmentsService, private router: Router) {}

  ngOnInit(): void {
    
    this.investmentsService.investments$.subscribe((investments) => {
      this.dataSource.data = investments;
      console.log(this.dataSource);
      
    });
  }

  clearAll(): void {
    this.investmentsService.clearInvestments();
  }

  backToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

}
