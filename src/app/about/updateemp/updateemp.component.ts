import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
//import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {
  update: any;
  editdata: any;
  id:number;
  employees: any;
  empid: any;
  updateData: any;
  errorMsg: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmpService, 
  private activatedrout:ActivatedRoute) { }
  addForm: FormGroup;
  key:any;
  employee:any;
  
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      employee_id: ['', Validators.required],
      employee_name: ['', Validators.required],
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],
      employee_age: ['', [Validators.required, Validators.maxLength(3)]],
      employee_address: ['', Validators.required],
    });
  
  // const id = +this.activatedrout.snapshot.paramMap.get('id');
  // console.log('route',id);
  this.id = +localStorage.getItem('id'); 
  this.editEmp(this.id);
  this.getAllEmp();
}


getAllEmp()
  {
    this.empService.getEmployees().subscribe(data => {
        this.employees = data;
        console.log('getAll',this.employees);
      });
  }


editEmp(id)
{
  this.empid = JSON.parse(localStorage.getItem('id'));
  console.log('empid',this.empid)
  this.empService.getEmployeeById(id).subscribe(getbyid =>{
    this.editdata = getbyid;
    console.log('editEmp',this.editdata)
      this.addForm.patchValue({
        "employee_id": this.editdata.employee_id,
        "employee_name": this.editdata.employee_name,
        "employee_salary": this.editdata.employee_salary,
        "employee_age": this.editdata.employee_age,
        "employee_address": this.editdata.employee_address,
        });   
  },
  error => 
  {
    alert(error)
  });
  
}

 

    onUpdate(employee) {
    this.empService.updateEmployee(this.addForm.value,this.id).subscribe(response => {
      this.update = response;
      if(this.update !='') {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'successfully updated',
          text:'updated',
          showConfirmButton: false,
          timer: 1500
        })
        }
      this.router.navigate(['about/list']);
      console.log(this.update);
    },
    error => 
      {
      this.errorMsg = error;
      alert(this.errorMsg.message);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Error',
        showConfirmButton: false,
        timer: 1500
      })
      });
    this.getAllEmp();
    
  }

    // onUpdate() {
    //  var updobj = {};
    //  updobj['employee_id'] = this.update.employee_id,
    //  updobj['employee_name'] = this.update.employee_name,
    //  updobj['employee_salary'] = this.update.employee_salary,
    //  updobj['employee_age'] = this.update.employee_age,
    //  updobj['employee_address'] = this.update.employee_address,
    //  this.empService.updateEmployee(updobj,this.id).subscribe(response => {
    // this.update = response;
    //  console.log('update',this.update);
    //  },
    //  error => {
    //    alert(error)
    //  });
    // this.getAllEmp();
    // }


//     onUpdate(employee) {
//     this.empService.updateEmployee(employee,this.id).subscribe(response => {
//       this.updateData = response;
//     this.addForm.patchValue({
//       "employee_id": this.update.employee_id,
//       "employee_name": this.update.employee_name,
//       "employee_salary": this.update.employee_salary,
//       "employee_age": this.update.employee_age,
//       "employee_address": this.update.employee_address,
//       });
//   this.router.navigate(['about/list']);
//   this.getAllEmp();
// },
// error => {
//   alert(error)
// });
// }



listEmp()
{
  this.router.navigate(['about/list']);
}

}



// {
//   "employee_id": 1,
//   "employee_name": "phani",
//   "employee_salary": 50000,
//   "employee_age": 24,
//   "employee_address": "gdv",
//   "id": 1
// },
// {
//   "employee_id": 2,
//   "employee_name": "gpv",
//   "employee_salary": 50000,
//   "employee_age": 24,
//   "employee_address": "Gudivada",
//   "id": 2
// },
// {
//   "employee_id": 3,
//   "employee_name": "phani",
//   "employee_salary": 60000,
//   "employee_age": 24,
//   "employee_address": "Vijayawada",
//   "id": 3
// },
// {
//   "employee_id": 4,
//   "employee_name": "Phaneendra",
//   "employee_salary": 80000,
//   "employee_age": 25,
//   "employee_address": "Gudivada",
//   "id": 4
// },
// {
//   "employee_id": 5,
//   "employee_name": "Phaneendra Venkat",
//   "employee_salary": 90000,
//   "employee_age": 24,
//   "employee_address": "Gudivada",
//   "id": 5
// }