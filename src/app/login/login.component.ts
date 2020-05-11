import { Component, OnInit } from '@angular/core';
import { MyserviceService, LoginData } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ser:MyserviceService,private router:Router) { }

  msg:string="Enter Correct UserName and Password";
  ngOnInit(): void {
  }
  onSubmit(u:LoginData){
   this.ser.login(u).subscribe(
      users=>{
        console.log(users);
        if(users=="employee")
            this.router.navigate(['app-employee']);
        else if(users=="bgv")
            this.router.navigate(['app-bgv']);
        else if(users=="none")
           return alert("Enter correct credentials");
      }
    );
  }


}
