import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    if(searchTerm === undefined || '') {
      return value;
    } else {
      return value.filter( function(category: any) {
        return category.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    }
  }

}
