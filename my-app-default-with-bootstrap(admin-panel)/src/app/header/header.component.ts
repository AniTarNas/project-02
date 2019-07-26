import { Component, OnInit } from '@angular/core';
import {AuthInfoService} from '../shared/auth-info.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authInfoService: AuthInfoService, private routerNavigate: Router) { }

  ngOnInit() {}

  logOut(){
    this.authInfoService.logOut();
    this.routerNavigate.navigate(['/']);
  }
}
