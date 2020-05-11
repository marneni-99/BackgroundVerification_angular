import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {

  [x: string]: any;
  constructor(private httpClient: HttpClient) { }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  fileId: any;
  resultFile:any;
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Spring Boot to get the Image Bytes.
   this.httpClient.get('http://localhost:6700/get/' + this.fileId)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.pic;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }

      );
    }

  }
