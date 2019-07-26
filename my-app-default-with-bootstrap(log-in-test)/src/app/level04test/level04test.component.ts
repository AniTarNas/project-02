import { Component, OnInit } from '@angular/core';
import {TestsService} from '../shared/tests.service';
import {UsersService} from '../shared/users.service';

import {Auth04Service} from '../shared/auth04.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Auth05Service} from '../shared/auth05.service';
import {Test, User} from "../../../../my-app-default-with-bootstrap(admin-panel)/src/app/shared/class";

@Component({
  selector: 'app-level04test',
  templateUrl: './level04test.component.html',
  styleUrls: ['./level04test.component.css']
})
export class Level04testComponent implements OnInit {

  test: Test[] = [];
  activeUser: User;
  myString: string;
  myNumber: number;

  constructor(private testsService: TestsService,
              private usersService: UsersService,
              private auth04Service: Auth04Service,
              private auth05Service: Auth05Service,
              private routerNavigate: Router) { }

  ngOnInit() {
    this.testsService.getTest04().subscribe((test: Test[]) => {
      this.test = test;
    });
    this.activeUser = this.usersService.activeUser;
  }

  onSubmit(form: NgForm) {
    this.myString = 'The number of correct answers - ';
    this.myNumber = 0;

    for (let key in this.test) {
      if (form.control.value[this.test[key].number] === this.test[key].trueAnswer) {
        this.myNumber = +this.myNumber + 1;
      } else if (form.control.value[this.test[key].number] === "") {
        this.myString = "The number of correct answers - 0";
      }
    }
    this.myString = this.myString + this.myNumber;
    if (this.myNumber >= 5) {

      this.activeUser.level = 5;
      this.activeUser.level05 = true;

      this.usersService.activeUser = this.activeUser;

      this.usersService.changeUser(this.activeUser).subscribe(() => {});

      this.auth05Service.logIn();
      this.routerNavigate.navigate(['/levels/levels05info']);
    }
  }

}
