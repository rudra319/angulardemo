import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2Inr'
})
export class Usd2InrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [conversionRate, tax] = args;
    return value*conversionRate - tax;
  }

}
