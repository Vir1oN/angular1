import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../models/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName = new FormControl('Your name', [Validators.required, Validators.minLength(2),
  ]);
  userAge = new FormControl(18, [Validators.required, this.ageValidator]);
  userForm = new FormGroup({name: this.userName, age: this.userAge});

  newUser: User = {name: 'Your name', age: 18};
  allUsers: User[] = [];
  constructor() {
  }

  templateFormSubmit(): void {
    this.allUsers.push(Object.assign({}, this.newUser));
  }

  reactiveFormSubmit(): void {
    console.log(this.userForm);
    const {controls: {age: {value: age}}} = this.userForm;
    const {controls: {name: {value: name}}} = this.userForm;
    this.allUsers.push(new User(name, age));
  }

  ageValidator(input: AbstractControl): any {
    if (input.value <= 0) {
      return {error: true, msg: 'age must be greater than 0'};
    } else {
      return null;
    }
  }
}

