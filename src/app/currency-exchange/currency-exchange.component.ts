import { Component } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent {
  text: number = 0;
  defaultCurrency = '';
  wantedCurrency = '';
  resultList: any;
  gottenRate = 0;
  rateDate = '';


  currencyList: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Make the API call when the component is initialized
    this.apiService.getCurrencies().subscribe(
      (data) => {
        // Handle successful API response
        this.currencyList = Object.keys(data).map((key) => [key, data[key]]);
      },
      (error) => {
        // Handle API error
        console.error('Error fetching data from API:', error);
      }
    );
  }

  convert() {
    this.wantedCurrency.length > 1 && this.defaultCurrency.length > 1 && this.apiService.convertCurrency(this.defaultCurrency, this.wantedCurrency).subscribe(
      (data) => {
        console.log(data);
        this.resultList = Object.keys(data).map((key) => [key, data[key]]);
        this.gottenRate = this.resultList[1][1];
        this.rateDate = this.resultList[0][1];
      },
      (error) => {
        // Handle API error
        console.error('Error fetching data from API:', error);
      }
    )
  }

  searchIt() {
    console.log('Input value changed:', this.text);
  }
}
