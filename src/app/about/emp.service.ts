import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { Employee } from './employee.model';





@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  constructor(private http: HttpClient) 
  { 
    
  }
  
 
  // login(Username:string,password:string){
  //   var headersForToken = new Headers({
  //     'Content-Type':'application/json; charset=utf-8'
  //   })
  //   var data = "grant_type=password&username="+ Username + "&password="+password;
  //   return this.http.post('http://localhost:3000/token/',data,{ headers : headersForToken})
  // }


  logIn(username: string, password: string) {
    
    const body = JSON.stringify({username: username,
                                 password: password});
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post('http://localhost:3000/token/', body, {headers: headers})
  }


  getEmployees():Observable<any> {
    return this.http.get('http://localhost:3000/employees/').pipe(catchError(this.errorHandler))
    
  }

  createUser(employee) {
    return this.http.post('http://localhost:3000/employee/', employee)
   
  }
  getEmployeeById(id:number) {
    return this.http.get('http://localhost:3000/employees/'+ id)
    
  }
  updateEmployee(employee,id) {
    return this.http.put('http://localhost:3000/employees/'+ id, employee)
   
  }
  deleteEmployees(id){
    return this.http.delete('http://localhost:3000/employees/'+ id)
    
  }
  
    
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error')
  }
  
}

