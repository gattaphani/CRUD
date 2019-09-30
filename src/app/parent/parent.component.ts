import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
//import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  implements OnInit{
  ngOnInit()  {
  }
    
 
    //parentMessage:string = "Message from parent"; 

    //message:string;
    
 

   // @ViewChild(ChildComponent) child


  // ngAfterViewInit() {
  //   this.message = this.child.ViewChildmessage;
  //   console.log(this.message);
  // }
  // receiveMessage($event) {
  //   this.message = $event;
  // }
  
  constructor() { }

  // ngOnInit() {
  // }

}
