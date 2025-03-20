import { InvestmentService } from './../investment.service';
import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  get investments() {
    return this.investmentService.resultsData;
  }
}
