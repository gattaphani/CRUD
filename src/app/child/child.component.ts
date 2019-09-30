import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  //  @Input() childMessage: string;


  // ViewChildmessage: string = "Receiving Message from child";
  // tslint:disable-next-line:no-trailing-whitespace
  


  // @Output() messageEvent = new EventEmitter();

  // sendMessage() {
  //   this.messageEvent.emit(this.ViewChildmessage)
  // }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  public student = {
    id: '',
    name: '',
    marks: ''
   };
  ngOnInit() {
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
