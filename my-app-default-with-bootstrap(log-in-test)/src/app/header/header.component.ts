import { Component, OnInit, } from '@angular/core';
import {UsersService} from '../shared/users.service';
import {Auth00Service} from '../shared/auth00.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  activeUser;
  activeUserName;

  constructor(private usersService: UsersService, private auth00Service: Auth00Service, private routerNavigate: Router) {}

  ngOnInit() {
    this.activeUser = this.usersService.activeUser;
    this.activeUserName = this.activeUser.userName;
  }

  logOut(){
    this.auth00Service.logOut();
    this.routerNavigate.navigate(['/']);
  }
}
