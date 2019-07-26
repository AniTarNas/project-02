import { Component, OnInit } from '@angular/core';
import {UsersService} from "../shared/users.service";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users = [];
  newUserName;
  newUserPassword;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }
  addNewUser(){
    let newUser = {
      userName: this.newUserName,
      password: this.newUserPassword,
      level01: true,
      level02: false,
      level03: false,
      level04: false,
      level05: false,
      level06: false,
      finish: false,
      level: 1
    };
    this.usersService.addUser(newUser).subscribe(() => {
      this.users.push(newUser);
    });
  }

}
