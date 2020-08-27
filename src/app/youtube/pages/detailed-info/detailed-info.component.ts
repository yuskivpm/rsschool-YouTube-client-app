import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from 'src/app/core/services/search.service';
import { IResponseItem } from '../../models/response-item.model';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnInit {
  public isLoading: boolean = true;
  public item: IResponseItem;

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) { }

  public ngOnInit(): void {
    const myId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.searchService.getItemById(myId).subscribe(
      item => this.item = item,
      null,
      () => this.isLoading = false
    );
  }

}
