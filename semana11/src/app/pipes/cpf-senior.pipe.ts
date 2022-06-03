import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfSenior'
})
export class CpfSeniorPipe implements PipeTransform {

  transform(value: string): string {
    let valorFormatado = value + '';

    valorFormatado = valorFormatado
        .padStart(11, '0')                  // item 1
        .substr(0, 11)                      // item 2
        .replace(/[^0-9]/, '')              // item 3
        .replace(                           // item 4
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            '$1.$2.$3-$4'
        );

    return valorFormatado;
  }

}
