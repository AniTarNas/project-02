import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LevelsInfoService {

  constructor(private http: HttpClient) { }

  getLevelsInfo(){
    return this.http.get('http://localhost:3000/info');
  }

  changeLevelsInfo(info){
    return this.http.put('http://localhost:3000/info/' + info.id, info);
  }
}
