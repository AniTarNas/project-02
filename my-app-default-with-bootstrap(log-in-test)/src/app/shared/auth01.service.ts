import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth01Service {

  isLogged = false;

  constructor() { }

  logIn(){
    this.isLogged = true;
  }
  logOut(){
    console.log('false');
    this.isLogged = false;
  }
  logData(){
    return this.isLogged;
  }
}
