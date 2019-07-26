import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth00Service} from './auth00.service';

@Injectable({
  providedIn: 'root'
})

export class LevelsGuard implements CanActivate {
  constructor(private auth00Service: Auth00Service){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth00Service.logData()) return true;
    return false;
  }
}
