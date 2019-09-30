import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
  Posts: any;
  updatePosts: any;
   id = this.route.snapshot.params.id;
  saveuser: any;
  users: Users;
    constructor(private formBuilder: FormBuilder, private rest: RestService, private route: ActivatedRoute, private rout: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            email: ['', [Validators.required, Validators.minLength(6),
            Validators.maxLength(25), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            // confirmPassword: ['', Validators.required]
        });


        this.getAll();
        this.getAllById(this.id);
        this.updateAll();
        this.saveAll();


    this.registerForm.get('firstName').valueChanges.subscribe(
      value => {
        console.log('first name :',value);
       }
    );

    }


    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        console.log('Register form' + JSON.stringify(this.registerForm.value));
        console.log('Register form', this.registerForm.value);
        this.rout.navigate['/']
    }

    getAll() {
      this.rest.getAll().subscribe(response => {
        this.Posts = response;
        console.log('posts:', this.Posts);
      });
    }

    getAllById(id) {
      this.rest.getAllById(this.id).subscribe(response => {
        this.Posts = response;
        console.log('getallById:', this.Posts);
      });
    }

saveAll() {
  this.rest.createAll(this.users).subscribe(saveres => {
    this.saveuser = saveres;
    console.log('save user', this.saveuser);
  });
}

    updateAll() {
     this.registerForm.patchValue({
        firstName : this.registerForm.get('firstName').value,
        lastName : this.registerForm.get('lastName').value,
        email : this.registerForm.get('email').value,
        password : this.registerForm.get('password').value,

      });
     this.rest.updateAll(this.id, this.users).subscribe(  update => {
        this. updatePosts = update;
        console.log('update', this.updatePosts);

      });
    }


}
