import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { DateToColor } from '../services/date-to-color.service';

@Directive({
  selector: '[appDateStatus]'
})
export class DateStatusDirective implements OnInit {
  @Input('appDateStatus') public date: string = '';

  constructor(private el: ElementRef, private renderer2: Renderer2, private dateToColor: DateToColor) { }

  public ngOnInit(): void {
    const borderColor = this.dateToColor.getColor(this.date);
    this.renderer2.setStyle(this.el.nativeElement, 'border-bottom', `5px solid ${borderColor}`);
  }
}
