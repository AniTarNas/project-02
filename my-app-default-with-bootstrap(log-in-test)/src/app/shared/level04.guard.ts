import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth04Service} from './auth04.service';

@Injectable({
  providedIn: 'root'
})

export class Level04Guard implements CanActivate {

  constructor(private auth04Service: Auth04Service){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.auth04Service.logData()) return true;

    return false;
  }
}
