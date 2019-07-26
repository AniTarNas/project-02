import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth01Service} from './auth01.service';

@Injectable({
  providedIn: 'root'
})
export class Level01Guard implements CanActivate {

  constructor(private auth01Service: Auth01Service){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.auth01Service.isLogged) return true;

    return false;
  }
}
