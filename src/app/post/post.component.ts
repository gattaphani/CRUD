import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 post: any;
 postid: any;
  private sub: any;
  id: number;
  array:any=[];
  data:any;
  constructor(private route: ActivatedRoute, private rest: RestService, private router: Router) { }

  ngOnInit() {
   
    // let id = this.route.snapshot.paramMap.get('id');
    //this.getById(id);
  
    this.route.paramMap.subscribe((params : ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.id = id;
      console.log('id',id)
      this.getById(id);
    });
 
    
    }

    getById(id){
      this.rest.getPost(id).subscribe(res=>{
        this.data = res;
        this.array.push(this.data)
        console.log(' getById',this.data)
      })
    }

    goBackPost() {
      this.router.navigate(['/crud', {id:this.id}]);
    }
    }

  


