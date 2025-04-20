import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { Component, Input, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class CardPricingComponent {
  @Input() gameType: string = 'default';
  @Input() price: string = '0';
}
