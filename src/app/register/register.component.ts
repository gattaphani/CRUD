import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatePassword } from './passwordvalidator'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted:boolean=false;
  constructor(private fb: FormBuilder) { }

  get myForm() {
    return this.registerForm.controls;
  }
  
  ngOnInit()
   {
    
    this.registerForm = this.fb.group({
      // email: ['', [Validators.required]],
      password:['', [Validators.required]],
      confirmPasswod:['', [Validators.required]]
    },
    {
       validator: ValidatePassword.MatchPassword
    });
  }
  
  

onSubmit() {
this.submitted = true;
if(!this.registerForm.valid) 
{
alert('Please fill all the required fields to create a super hero!')
return false;
} else 
{
console.log(this.registerForm.value)
}
}
}


