import { Component, OnInit } from '@angular/core';
import { FileService, Verification } from '../file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-status',
  templateUrl: './set-status.component.html',
  styleUrls: ['./set-status.component.css']
})
export class SetStatusComponent implements OnInit {
userid:number;
  constructor(private ser:FileService,private router:Router) { }
  ngOnInit(): void {
  }
  onSubmit(setVer:Verification):any{
    console.log(setVer);
     this.ser.addVer(setVer,this.userid).subscribe(data => {
      });
      this.router.navigate(['app-bgv']);
  }

}
