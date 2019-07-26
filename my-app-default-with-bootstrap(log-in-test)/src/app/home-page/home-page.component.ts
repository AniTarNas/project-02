import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User} from '../../../../my-app-default-with-bootstrap(admin-panel)/src/app/shared/class';

import {UsersService} from '../shared/users.service';
import {Auth00Service} from '../shared/auth00.service';
import {Auth01Service} from '../shared/auth01.service';
import {Auth02Service} from '../shared/auth02.service';
import {Auth03Service} from '../shared/auth03.service';
import {Auth04Service} from '../shared/auth04.service';
import {Auth05Service} from '../shared/auth05.service';
import {Auth06Service} from '../shared/auth06.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userName: string;
  userPassword: string;
  users: User[] = [];
  errorMessage: string;
  flag: boolean;

  constructor(private routerNavigate: Router,
              private usersService: UsersService,
              private auth00Service: Auth00Service,
              private auth01Service: Auth01Service,
              private auth02Service: Auth02Service,
              private auth03Service: Auth03Service,
              private auth04Service: Auth04Service,
              private auth05Service: Auth05Service,
              private auth06Service: Auth06Service){ }

  ngOnInit(){
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  log() {
    for (let user of this.users) {
      if (user.userName === this.userName && user.password === this.userPassword) {
        this.flag = true;
        this.usersService.activeUser = user;
        this.auth00Service.logIn();

        if(user.level === 1) {
          this.auth01Service.logIn();
          this.routerNavigate.navigate(['/levels/levels01info']);
        }else if(user.level === 2){
          this.auth01Service.logIn();
          this.auth02Service.logIn();
          this.routerNavigate.navigate(['/levels/levels02info']);
        }else if(user.level === 3){
          this.auth01Service.logIn();
          this.auth02Service.logIn();
          this.auth03Service.logIn();
          this.routerNavigate.navigate(['/levels/levels03info']);
        }else if(user.level === 4){
          this.auth01Service.logIn();
          this.auth02Service.logIn();
          this.auth03Service.logIn();
          this.auth04Service.logIn();
          this.routerNavigate.navigate(['/levels/levels04info']);
        }else if(user.level === 5){
          this.auth01Service.logIn();
          this.auth02Service.logIn();
          this.auth03Service.logIn();
          this.auth04Service.logIn();
          this.auth05Service.logIn();
          this.routerNavigate.navigate(['/levels/levels05info']);
        }else if(user.level === 6){
          this.auth01Service.logIn();
          this.auth02Service.logIn();
          this.auth03Service.logIn();
          this.auth04Service.logIn();
          this.auth05Service.logIn();
          this.auth06Service.logIn();
          this.routerNavigate.navigate(['/levels/levels06info']);
        }else if(user.level === 7){
          this.auth01Service.logIn();
          this.auth02Service.logIn();
          this.auth03Service.logIn();
          this.auth04Service.logIn();
          this.auth05Service.logIn();
          this.auth06Service.logIn();
          this.routerNavigate.navigate(['/finish']);
        }
      }
    }

    if(!this.flag){
      this.userName = undefined;
      this.userPassword = undefined;
      this.errorMessage = "User Not Found";
      return false;
    }

  }
}
