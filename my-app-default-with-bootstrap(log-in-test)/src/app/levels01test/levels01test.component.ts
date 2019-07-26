import { Component, OnInit } from '@angular/core';
import {TestsService} from '../shared/tests.service';
import {NgForm} from '@angular/forms';
import {UsersService} from '../shared/users.service';
import {Auth01Service} from '../shared/auth01.service';
import {Auth02Service} from '../shared/auth02.service';
import {Router} from '@angular/router';
import {Test, User} from "../../../../my-app-default-with-bootstrap(admin-panel)/src/app/shared/class";

@Component({
  selector: 'app-levels01test',
  templateUrl: './levels01test.component.html',
  styleUrls: ['./levels01test.component.css']
})
export class Levels01testComponent implements OnInit {

  test: Test[] = [];
  activeUser: User;
  myString: string;
  myNumber: number;

  constructor(private testsService: TestsService,
              private usersService: UsersService,
              private auth01Service: Auth01Service,
              private auth02Service: Auth02Service,
              private routerNavigate: Router) { }

  ngOnInit() {
    this.testsService.getTest01().subscribe((test: Test[]) => {
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

      this.activeUser.level = 2;
      this.activeUser.level02 = true;

      this.usersService.activeUser = this.activeUser;

      this.usersService.changeUser(this.activeUser).subscribe(() => {});

      this.auth02Service.logIn();
      this.routerNavigate.navigate(['/levels/levels02info']);
    }
  }
}
