import { InvestmentService } from './../investment.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: false,
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  investments = computed(() => this.investmentService.resultsData());
}
