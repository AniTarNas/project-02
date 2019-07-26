import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth02Service {

  isLogged = false;

  constructor() { }

  logIn(){
    this.isLogged = true;
  }
  logOut(){
    this.isLogged = false;
  }
  logData(){
    return this.isLogged;
  }
}

