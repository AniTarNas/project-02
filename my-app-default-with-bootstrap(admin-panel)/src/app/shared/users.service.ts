import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/users');
  }
  changeUserData(user){
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }
  addUser(data){
    return this.http.post('http://localhost:3000/users', data);
  }
  deleteUser(data){
    return this.http.delete('http://localhost:3000/users/' + data);
  }
}
