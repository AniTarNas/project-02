import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth02Service} from './auth02.service';

@Injectable({
  providedIn: 'root'
})

export class Level02Guard implements CanActivate {

  constructor(private auth02Service: Auth02Service){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.auth02Service.logData()) return true;

    return false;
  }
}
