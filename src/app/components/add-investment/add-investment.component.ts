import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { investmentFormJson } from '../../models/investment-form.config';
import { FormField } from '../../models/form-field.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { InvestmentsService } from '../../services/investments.service';

@Component({
  selector: 'app-add-investment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './add-investment.component.html',
  styleUrl: './add-investment.component.scss'
})
export class AddInvestmentComponent implements OnInit {

  formFields: FormField[] = investmentFormJson;
  investmentForm!: FormGroup;

  showPreview = false;
  submittedData: any;

  constructor(private fb: FormBuilder, private router: Router, private investmentService: InvestmentsService) {}

  ngOnInit(): void {
    const formGroupConfig: any = {};
    this.formFields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      formGroupConfig[field.name] = ['', validators];
    });
    this.investmentForm = this.fb.group(formGroupConfig);
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      this.submittedData = this.investmentForm.value;
      // console.log(this.submittedData);
      this.showPreview = true; // Show review section
    }
  }

  confirmSubmission(): void {
    this.investmentService.addInvestment(this.submittedData);
    this.router.navigate(['/review-investment']);
  }

  editForm(): void {
    this.showPreview = false; // Show form again
  }

}
