import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth03Service} from './auth03.service';

@Injectable({
  providedIn: 'root'
})

export class Level03Guard implements CanActivate {

  constructor(private auth03Service: Auth03Service){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.auth03Service.logData()) return true;

    return false;
  }
}
