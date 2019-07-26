import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInfoService {

  isLogged = false;

  constructor() { }

  logIn(){
    this.isLogged = true;
  }
  logOut(){
    this.isLogged = false;
  }
  logInfo(){
    return this.isLogged;
  }
}
