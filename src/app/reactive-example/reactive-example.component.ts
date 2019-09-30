import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-reactive-example',
  templateUrl: './reactive-example.component.html',
  styleUrls: ['./reactive-example.component.css']
})
export class ReactiveExampleComponent implements OnInit {
  userForm: FormGroup;
  user: User = {
    firstName: 'New',
    lastName: 'User',
    role: 'Guest',
    notes: undefined
  };
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      role: [this.user.role, [Validators.required]],
      notes: [this.user.notes, [Validators.maxLength(45)]]
    });
   }

  ngOnInit() {
  }

}
