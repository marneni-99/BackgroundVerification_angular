import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeComponent } from './employee/employee.component';
import { BgvComponent } from './bgv/bgv.component';
import { UploadComponent } from './upload/upload.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { SetStatusComponent } from './set-status/set-status.component';
import { RetrieveComponent } from './retrieve/retrieve.component';

const routes: Routes = [
  {path:'app-login',component:LoginComponent},
  {path:'app-signup',component:SignupComponent},
  {path:'app-employee',component:EmployeeComponent},
  {path:'app-bgv',component:BgvComponent},
  {path:'app-upload',component:UploadComponent},
  {path:'app-check-status',component:CheckStatusComponent},
  {path:'app-set-status',component:SetStatusComponent},
  {path:'app-retrieve',component:RetrieveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
