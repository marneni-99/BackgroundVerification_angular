import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private _http:HttpClient) { }
  up: Verification;
  public addVer(setVer: Verification,userid:number) {
    console.log("ins service add");
    console.log(setVer);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this._http.post("http://localhost:6600/ver/addVer/"+userid, setVer,  { headers, responseType: 'text'});
  }

  public checkStatus(userId:number){
    console.log("ins service get status");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this._http.get("http://localhost:6600/ver/checkStatus/" + userId,{ headers, responseType: 'json'});
  }

}
export class Verification{
  VerificationId:number;
  Status:String;
  UserId:number;
  DocId:number;
}
