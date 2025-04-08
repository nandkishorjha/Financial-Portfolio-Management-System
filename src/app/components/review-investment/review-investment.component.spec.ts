import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewInvestmentComponent } from './review-investment.component';

describe('ReviewInvestmentComponent', () => {
  let component: ReviewInvestmentComponent;
  let fixture: ComponentFixture<ReviewInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewInvestmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
