import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Investment {
  assetType: string;
  quantity: number;
  amount: number;
  purchasePrice: number;
  purchaseDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  private storageKey = 'investments';
  private investmentsSubject = new BehaviorSubject<Investment[]>([]);

  public investments$: Observable<Investment[]> = this.investmentsSubject.asObservable();

  constructor() {
    const localData = localStorage.getItem(this.storageKey);
    const initial = localData ? JSON.parse(localData) : [];
    this.investmentsSubject.next(initial);
  }

  addInvestment(investment: Investment): void {
    const current = this.investmentsSubject.getValue();
    const updated = [...current, investment];
    this.investmentsSubject.next(updated);
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
  }

  clearInvestments(): void {
    this.investmentsSubject.next([]);
    localStorage.removeItem(this.storageKey);
  }

  // Optional: force reload from localStorage
  reloadFromStorage(): void {
    const localData = localStorage.getItem(this.storageKey);
    const loaded = localData ? JSON.parse(localData) : [];
    this.investmentsSubject.next(loaded);
  }
}
