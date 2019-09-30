import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {
  form: FormGroup;
  empList=[];
  
    constructor(private fb :FormBuilder){}
   
     ngOnInit(){
      this.form = this.fb.group({
        firstName: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(4),Validators.pattern('^[a-zA-Z]*$')]],
        lastName: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(4),Validators.pattern('^[a-zA-Z]*$')]],
        age: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(4)]]
       
      })
     }
     empData(emp){
       console.log(emp);
       this.empList.push(emp);
       console.log(this.empList);
       this.form.reset();
       
     }
  
  editData(emp)
  {
  console.log(emp);
  this.form.patchValue({
    'firstName':emp.firstName,
    'lastName':emp.lastName,
    'age':emp.age
  })
  
  }
  
  deleteData(i)
  {
    this.empList.splice(i,1);
  }
  
}
