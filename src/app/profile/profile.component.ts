import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { matchingPasswords } from './validator';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
  }


  addForm: FormGroup;
  // addUser() {
  // if (this.addForm.valid) {
  // var adduser = {
  // username: this.addForm.controls['username'].value,
  // email: this.addForm.controls['email'].value,
  // password: this.addForm.controls['password'].value,
  // profile: {
  // role: this.addForm.controls['role'].value,
  // name: this.addForm.controls['username'].value,
  // email: this.addForm.controls['email'].value
  // }
  // };
  // console.log(adduser);// adduser var contains all our form values. store it where you want
  // this.addForm.reset();// this will reset our form values to null
  // }
  // }





  public student = {
    id: '',
    name: '',
    marks: ''
   };
  ngOnInit() {
  // this.addForm = this.formBuilder.group({
  // username: ['', Validators.required],
  // email: ['', Validators.required],
  // role: ['', Validators.required],
  // password: ['', Validators.required],
  // password2: ['', Validators.required] },
  // { validator: matchingPasswords('password', 'password2')
  // })


  this.student.id = this.route.snapshot.paramMap.get('id');
  this.student.name = this.route.snapshot.paramMap.get('name');
  this.student.marks = this.route.snapshot.paramMap.get('marks');
  console.log('student', this.student);
  console.log('ActivatedRoute', this.route);
  }

  //  gotoStudentList(){
  //   this.router.navigate(['/crud', {id : this.student.id, name : this.student.name, marks : this.student.marks}])
  // }
  gotoStudentList() {
    this.router.navigate(['/crud', this.student]);
  }
}
