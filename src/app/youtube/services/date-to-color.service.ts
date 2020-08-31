import { Injectable } from '@angular/core';

import { DAY_LENGTH, BORDER_COLORS } from '../../constants/common';

@Injectable({
  providedIn: 'root',
})
export class DateToColor {
  public getColor(date: string): string {
    const daysPast: number = Math.abs(
      (Date.now() - new Date(date).getTime()) / DAY_LENGTH
    );
    return BORDER_COLORS.find(({ term }) => daysPast < term).color;
  }
}
