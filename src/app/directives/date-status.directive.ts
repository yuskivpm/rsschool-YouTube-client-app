import { Directive, Input, ElementRef, OnInit } from '@angular/core';

import { BORDER_COLORS } from 'src/app/constants/common';

@Directive({
  selector: '[appDateStatus]'
})
export class DateStatusDirective implements OnInit {
  @Input('appDateStatus') date: string = '';

  constructor(private el: ElementRef) { }

  public ngOnInit(): void {
    const DAY_LENGTH = 1000 * 60 * 60 * 24;
    const daysPast = Math.abs((Date.now() - new Date(this.date).getTime()) / DAY_LENGTH);
    const node: HTMLElement = this.el.nativeElement;
    const borderColor = BORDER_COLORS.find(({ term }) => daysPast < term).color;
    node.style.borderBottom = `5px solid ${borderColor}`;
  }
}
