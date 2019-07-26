import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth05Service} from './auth05.service';

@Injectable({
  providedIn: 'root'
})

export class Level05Guard implements CanActivate {

  constructor(private auth05Service: Auth05Service){}
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.auth05Service.logData()) return true;

    return false;
  }
}
