import { Pipe, PipeTransform } from '@angular/core';
import { Jewlry } from './jewlry.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], searchFor: string, inwhat: string): any[] {
    let foundJewlries: any[] =[];


    if (searchFor.length === 0) {
      return value;
    }



    for (const jewlry of value) {
      if (String(jewlry[inwhat]).includes(searchFor)) {
        console.log(jewlry[inwhat]);
        foundJewlries.push(jewlry)
      }
    }

    console.log(foundJewlries)


    return foundJewlries;
  }
}
