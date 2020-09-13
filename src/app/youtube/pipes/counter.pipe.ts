// this rule conflict with typedef rule (https://github.com/palantir/tslint/issues/711)
/* tslint:disable: no-inferrable-types */
import { Pipe, PipeTransform } from '@angular/core';

const KILO_SIZE: number = 1000;
const MIN_KILO_CONVERT_SIZE: number = 10_000;
const MEGA_SIZE: number = 1_000_000;
const MIN_MEGA_CONVERT_SIZE: number = 10_000_000;

@Pipe({
  name: 'counter',
})
export class CounterPipe implements PipeTransform {
  public transform(count: string): string {
    const asNumber: number = parseInt(count, 10);
    if (asNumber > MIN_MEGA_CONVERT_SIZE) {
      return `${Math.round(asNumber / MEGA_SIZE)}M`;
    }
    if (asNumber > MIN_KILO_CONVERT_SIZE) {
      return `${Math.round(asNumber / KILO_SIZE)}k`;
    }
    return count;
  }
}
