import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUsers'
})
export class FormatUsersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // value = value as
  }
}
