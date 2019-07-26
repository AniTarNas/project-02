import { Component, OnInit } from '@angular/core';
import {AdminService} from '../shared/admin.service';
import {Router} from '@angular/router';
import {AuthInfoService} from '../shared/auth-info.service';
import {Admin} from '../shared/class';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  admin: Admin;
  adminName: string;
  adminPassword: string;
  errorMessage: string;

  constructor(private adminService: AdminService,
              private routerNavigate: Router,
              private authInfoService: AuthInfoService) { }

  ngOnInit() {
    this.adminService.getAdmin().subscribe((admins: Admin[]) => {
      this.admin = admins[0];
    });
  }

  log(){
    if(this.adminName == this.admin.name && this.adminPassword == this.admin.password){
      this.authInfoService.logIn();
      this.routerNavigate.navigate(['/info/users']);
    }else{
      this.errorMessage = "Wrong data";
      this.adminName = undefined;
      this.adminPassword = undefined;
    }
  }
}
