import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {TestsService} from '../shared/tests.service';
import {UsersService} from '../shared/users.service';
import {Auth05Service} from '../shared/auth05.service';
import {Auth06Service} from '../shared/auth06.service';
import {Test, User} from "../../../../my-app-default-with-bootstrap(admin-panel)/src/app/shared/class";

@Component({
  selector: 'app-level05test',
  templateUrl: './level05test.component.html',
  styleUrls: ['./level05test.component.css']
})
export class Level05testComponent implements OnInit {

  test: Test[] = [];
  activeUser: User;
  myString: string;
  myNumber: number;

  constructor(private testsService: TestsService,
              private usersService: UsersService,
              private auth05Service: Auth05Service,
              private auth06Service: Auth06Service,
              private routerNavigate: Router) { }

  ngOnInit() {
    this.testsService.getTest05().subscribe((test: Test[]) => {
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

      this.activeUser.level = 6;
      this.activeUser.level06 = true;

      this.usersService.activeUser = this.activeUser;

      this.usersService.changeUser(this.activeUser).subscribe(() => {});

      this.auth06Service.logIn();
      this.routerNavigate.navigate(['/levels/levels06info']);
    }
  }

}
