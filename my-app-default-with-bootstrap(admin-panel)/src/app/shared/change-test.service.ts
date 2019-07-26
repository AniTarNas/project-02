import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChangeTestService {

  constructor(private http: HttpClient) { }

  getTest01(){
    return this.http.get('http://localhost:3000/test01');
  }
  getTest02(){
    return this.http.get('http://localhost:3000/test02');
  }
  getTest03(){
    return this.http.get('http://localhost:3000/test03');
  }
  getTest04(){
    return this.http.get('http://localhost:3000/test04');
  }
  getTest05(){
    return this.http.get('http://localhost:3000/test05');
  }
  getTest06(){
    return this.http.get('http://localhost:3000/test06');
  }

  changeTest01(data){
    return this.http.put('http://localhost:3000/test01/' + data.id, data);
  }
  changeTest02(data){
    return this.http.put('http://localhost:3000/test02/' + data.id, data);
  }
  changeTest03(data){
    return this.http.put('http://localhost:3000/test03/' + data.id, data);
  }
  changeTest04(data){
    return this.http.put('http://localhost:3000/test04/' + data.id, data);
  }
  changeTest05(data){
    return this.http.put('http://localhost:3000/test05/' + data.id, data);
  }
  changeTest06(data){
    return this.http.put('http://localhost:3000/test06/' + data.id, data);
  }

}
