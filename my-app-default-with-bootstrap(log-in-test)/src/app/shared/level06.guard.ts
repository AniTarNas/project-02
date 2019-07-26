import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth06Service} from './auth06.service';

@Injectable({
  providedIn: 'root'
})

export class Level06Guard implements CanActivate {

  constructor(private auth06Service: Auth06Service){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.auth06Service.logData()) return true;

    return false;
  }
}
