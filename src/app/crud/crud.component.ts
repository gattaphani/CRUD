import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/rest.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  post: any;
p:any;
  param: Object;
  constructor(private http: HttpClient, private rest: RestService, private router: Router, private route: ActivatedRoute) { }
  Posts: any[];
  id:number;
    public  student = {
      id: '',
      name: '',
      marks: ''
     };

     public students = [
      {id : 1001, name : 'Irshad', marks : 90},
      {id : 1002, name : 'Imran', marks : 80},
      {id : 1003, name : 'Rahul', marks : 70},
      {id : 1004, name : 'Ajay', marks : 85},
      {id : 1005, name : 'Sunny', marks : 60}
      ];

  ngOnInit() {
    this. getAllPosts();
    this.getPostByParam();
    this.student.id = this.route.snapshot.paramMap.get('id');
    this.student.name = this.route.snapshot.paramMap.get('name');
    this.student.marks = this.route.snapshot.paramMap.get('marks');
  }


  getAllPosts() {
    this.rest.get_posts().subscribe(response => {
      this.Posts = response;
      console.log(this.Posts);
    });
  }

  getPostById(post)
  {
    // this.rest.getPost(post).subscribe(res =>{
    //   this.post = res;
    // })
      this.router.navigate(['/post', post.id]);
      // console.log('getPostById',this.post);
    
  }

  getPostByParam(){
    this.rest.getPostByParameter().subscribe(res=>{
      this.param = res;
      console.log('param', this.param)
    })
  }
  
  }


