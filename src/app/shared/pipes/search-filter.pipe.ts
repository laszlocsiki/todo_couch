import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../model/task.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(items);
    console.log(searchText);
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( obj => {
      const title = obj.title.toLowerCase();
      console.log(title);
      return title.includes(searchText);
    });
  }

}
