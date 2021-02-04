import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './interfaces/User';
import {isEmptyExpression} from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: User[];
  color = 'lightblue';
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  setColor(color: string): void {
    this.color = color;
  }
}

