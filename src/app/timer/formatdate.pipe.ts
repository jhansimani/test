import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate',
})
export class FormatdatePipe implements PipeTransform {
  transform(value: any): any {
    console.log('recieved date', value);
    // console.log('recieved format',format);
    let formattedDate = value.replaceAll('/', '-');
    formattedDate = formattedDate.replace(/,/g, ' ');
    if(formattedDate.includes('PM')) {
      formattedDate = formattedDate.replace('PM', 'pm');
    }
    else {
      formattedDate = formattedDate.replace('AM', 'am');
    }
    console.log('formatted date', formattedDate);
    return formattedDate;
  }
}
