import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent1: any,exponent2: any): number {
    let exp = parseFloat(exponent2);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}