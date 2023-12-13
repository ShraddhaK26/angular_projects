import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallserviceService {

  Oname:any;
  id:any;
  IdRecord:any;
  url="http://localhost:3000"
  userName: any;
  
  constructor(private httpClient: HttpClient) { }
  postApiCall(endPoint: any, formData: any) {
    let url = this.url + '/' + endPoint;
    return this.httpClient.post(url, formData)
  }

  getApiCall(endPoint :any){
    let url = this.url + "/" + endPoint;
    return this.httpClient.get(url);
   }

   patchApiCall(endPoint:any,id:any, formData:any) {
    let url = this.url + "/" + endPoint + "/"+ id;
    return this.httpClient.patch(url,formData);
  }
  deleteApiCall(endPoint:any, id:any) {
    let url = this.url + "/" + endPoint + "/"+ id;
    return this.httpClient.delete(url);
  }





   




}
