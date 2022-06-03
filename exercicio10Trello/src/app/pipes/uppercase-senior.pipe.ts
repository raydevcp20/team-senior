import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseSenior'
})
export class UppercaseSeniorPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
