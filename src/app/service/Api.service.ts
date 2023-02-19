import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root',
})

export class ApiService{
  url = "http://localhost:8000/api";
  constructor(
    private _service: HttpClient
  ){}

  home(){
    return this._service.get(this.url+`/home`);
  }

  sendNotification(){
    return this._service.get(this.url+`/sendNotifi`);
  }

  sendFeedBack(data:any){
    return this._service.post(this.url+`/sendFeedBack`,data);
  }


}
