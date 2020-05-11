import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private ser:HttpClient) { }

  up: LoginData;
  public getUser(){
    console.log("ins service get employees");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.ser.get<LoginData>("http://localhost:6600/user/GetAllUsers");
  }

  public addUser(addemp: LoginData) {
    console.log("ins service add");
    console.log(addemp);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.post("http://localhost:6600/user/addUser", addemp,  { headers, responseType: 'text'});
  }

  public update(up: LoginData) {
    this.up = up;
  }
  public updateMethod() {
    return this.up;
  }
  public onUpdate(updatemp: LoginData) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:6600/user/UpdateUser", updatemp,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.delete("http://localhost:6600/user/DeleteUser/" + id,  { headers, responseType: 'text'});
  }
  login(u:LoginData){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:6600/user/Loginuser", u,  { headers, responseType: 'text'});
  }

  //logOut() {
    //sessionStorage.removeItem('username')
  //}

}
export class LoginData{
  userId:number;
  userName:string;
  userType:string;
  userPassword:string;
  userPhonenumber:number;
  userEmail:string;
}
