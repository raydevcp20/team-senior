import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCaseSenior'
})
export class LowerCaseSeniorPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}
