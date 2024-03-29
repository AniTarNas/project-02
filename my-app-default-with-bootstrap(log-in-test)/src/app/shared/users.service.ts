import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUser;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/users');
  }
  changeUser(user){
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }

}
