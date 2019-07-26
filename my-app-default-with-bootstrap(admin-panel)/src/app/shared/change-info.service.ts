import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ChangeInfoService {

  constructor(private http: HttpClient) { }

  getInfo(){
    return this.http.get('http://localhost:3000/info');
  }
  changeInfo(info){
    return this.http.put('http://localhost:3000/info/' + info.id, info);
  }
}
