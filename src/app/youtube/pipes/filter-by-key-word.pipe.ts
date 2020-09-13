import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from 'src/app/shared/models/response-item.model';

@Pipe({
  name: 'filterByKeyWord'
})
export class FilterByKeyWordPipe implements PipeTransform {
  public transform(responseItems: IResponseItem[], filterWord: string): IResponseItem[] {
    const filter: RegExp = new RegExp(filterWord, 'i');
    return responseItems?.filter(({ snippet: { title } }) => filter.test(title));
  }
}
