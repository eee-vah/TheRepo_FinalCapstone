import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //search by name and category
  transform(value: Item[], searchTerm: string): Item[] {
    return value.filter((item: Item) => {
      if(item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      if(item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

}
