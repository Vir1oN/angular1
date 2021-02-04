import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../interfaces/User';

@Pipe({
  name: 'formatUsers'
})
export class FormatUsersPipe implements PipeTransform {

  transform(users: User[], ...args: unknown[]): string[] {
    if (!users) { return ['']; }
    return users.map(user => `User#${user.id} is called ${user.name} and has an email address ${user.email}`);
  }
}
