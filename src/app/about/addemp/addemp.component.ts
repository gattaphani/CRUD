import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { Employee } from '../employee.model';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {


  //employees: Employee[];
  reqobj: any;
  update: any;
  employees:any;
  empid: string;
  public errorMsg: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmpService) {
  }
  postData:any;
  addForm: FormGroup;
  btnvisibility: boolean;
  isUpdate:boolean;
  id:any;
  message:string='success';

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      employee_id: ['', Validators.required],
      employee_name: ['', Validators.required],
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],
      employee_age: ['', [Validators.required, Validators.maxLength(3)]],
      employee_address: ['', Validators.required]
    });
    this. getAllEmp();
  }



  getAllEmp()
  {
    this.empService.getEmployees().subscribe(data => {
        this.employees = data;
        console.log('getAll',this.employees);
      });
  }



  onSubmit(emp) 
  {
   var reqobj = {};
      reqobj['employee_id'] = this.addForm.get('employee_id').value,
      reqobj['employee_name'] = this.addForm.get('employee_name').value,
      reqobj['employee_salary'] = this.addForm.get('employee_salary').value,
      reqobj['employee_age'] = this.addForm.get('employee_age').value,
      reqobj['employee_address'] = this.addForm.get('employee_address').value,   
       console.log(reqobj);
       this.empService.createUser(reqobj).subscribe(res=> {
        this.postData = res;
        if(this.postData !='') {
          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'successfully added',
            text:'added',
            showConfirmButton: false,
            timer: 1500
          })
          }
        console.log('save', this.postData);
        this.router.navigate(['about/list']);
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
      this.router.navigate(['about/list']);
  }
  //this.empService.createUser(this.addForm.value).subscribe(res=> {
        //this.postData=res
        //console.log('save', this.reqobj);
        //this.router.navigate(['about/list']);
      //},
     // error => {
     //   alert(error);
     // });


  listEmp()
  {
    this.router.navigate(['about/list']);
  }

}

