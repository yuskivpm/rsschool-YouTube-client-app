import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CustomCardModel } from 'src/app/shared/models/custom-card.model';
import { IResponseItem } from 'src/app/shared/models/response-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public customCards$: Observable<CustomCardModel[]>;
  public youtube$: Observable<IResponseItem[]>;

  constructor(private store: Store<{ customCards: CustomCardModel[], youtube: IResponseItem[] }>) {
      this.customCards$ = this.store.pipe(select('customCards'));
      this.youtube$ = this.store.pipe(select('youtube'));
  }

}
