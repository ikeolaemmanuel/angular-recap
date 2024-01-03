// currency-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'USD'): string {
    // Check if the value is a valid number
    if (isNaN(value) || value === null) {
      return '';
    }

    // Convert the number to a string and format it as currency with the specified currency code
    const formattedValue = value.toLocaleString('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return formattedValue;
  }
}
