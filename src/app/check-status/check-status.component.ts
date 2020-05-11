import { Component, OnInit } from '@angular/core';
import { Verification, FileService } from '../file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  userId:number;
  search:boolean=false;
  search1:boolean=false;
  verification:any;
  private router: Router
  constructor(private checkservice: FileService, router: Router) {
    this.router=router;
  }
  ngOnInit(): any {
  }
  getStatus(){
    this.checkservice.checkStatus(this.userId).subscribe((data)=>this.verification=data);
    if(this.verification == null){
      this.search1 = true;
      this.search = false;
    }
    else{
      this.search1 = false;
      this.search= true;
    }
  }

}
