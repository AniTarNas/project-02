import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

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

  changeTest01(test){
    return this.http.put('http://localhost:3000/test01/' + test.id, test);
  }
  changeTest02(test){
    return this.http.put('http://localhost:3000/test02/' + test.id, test);
  }
  changeTest03(test){
    return this.http.put('http://localhost:3000/test03/' + test.id, test);
  }
  changeTest04(test){
    return this.http.put('http://localhost:3000/test04/' + test.id, test);
  }
  changeTest05(test){
    return this.http.put('http://localhost:3000/test05/' + test.id, test);
  }
  changeTest06(test){
    return this.http.put('http://localhost:3000/test06/' + test.id, test);
  }
}
