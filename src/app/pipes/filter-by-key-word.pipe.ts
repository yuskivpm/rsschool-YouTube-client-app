import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from '../models/youtube/response-item.model';

@Pipe({
  name: 'filterByKeyWord'
})
export class FilterByKeyWordPipe implements PipeTransform {

  transform(responseItems: IResponseItem[], filterWord: string): IResponseItem[] {
    const filter = new RegExp(filterWord, 'i');
    return responseItems.filter(({ snippet: { title } }) => filter.test(title));
  }

}
