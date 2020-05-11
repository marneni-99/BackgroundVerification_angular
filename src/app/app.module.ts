import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { BgvComponent } from './bgv/bgv.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { UploadComponent } from './upload/upload.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { SetStatusComponent } from './set-status/set-status.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmployeeComponent,
    BgvComponent,
    CheckStatusComponent,
    UploadComponent,
    RetrieveComponent,
    SetStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
