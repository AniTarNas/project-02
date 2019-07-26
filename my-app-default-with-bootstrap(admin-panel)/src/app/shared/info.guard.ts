import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthInfoService} from "./auth-info.service";

@Injectable({
  providedIn: 'root'
})

export class InfoGuard implements CanActivate {

  constructor(private authInfoService: AuthInfoService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authInfoService.logInfo()) return true;

    return false;
  }
}
