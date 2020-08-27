import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {
  public transform(count: string): string {
    const asNumber: number = parseInt(count, 10);
    if (asNumber > 10_000_000) {
      return `${Math.round(asNumber / 1_000_000)}M`;
    }
    if (asNumber > 10_000) {
      return `${Math.round(asNumber / 1000)}k`;
    }
    return count;
  }
}
