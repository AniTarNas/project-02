import { Component, OnInit } from '@angular/core';
import {ChangeTestService} from "../shared/change-test.service";
import {Test} from "../shared/class";

@Component({
  selector: 'app-change-test',
  templateUrl: './change-test.component.html',
  styleUrls: ['./change-test.component.css']
})
export class ChangeTestComponent implements OnInit {

  tests01: Test[] = [];
  tests02: Test[] = [];
  tests03: Test[] = [];
  tests04: Test[] = [];
  tests05: Test[] = [];
  tests06: Test[] = [];

  testNumber: number;
  questionNumber: number;
  question: string;
  answer01: string;
  answer02: string;
  answer03: string;
  trueAnswer: string;

  constructor(private changeTestService: ChangeTestService) { }

  ngOnInit() {

    this.changeTestService.getTest01().subscribe((tests: Test[]) => {
      this.tests01 = tests;
    });
    this.changeTestService.getTest02().subscribe((tests: Test[]) => {
      this.tests02 = tests;
    });
    this.changeTestService.getTest03().subscribe((tests: Test[]) => {
      this.tests03 = tests;
    });
    this.changeTestService.getTest04().subscribe((tests: Test[]) => {
      this.tests04 = tests;
    });
    this.changeTestService.getTest05().subscribe((tests: Test[]) => {
      this.tests05 = tests;
    });
    this.changeTestService.getTest06().subscribe((tests: Test[]) => {
      this.tests06 = tests;
    });
  }

  changeTest(){
    let testOneQuestion = {
      id: this.questionNumber,
      number: '0' + this.testNumber + '-' + '0' + this.questionNumber,
      oneQuestion: this.question,
      answers: [
        this.answer01,
        this.answer02,
        this.answer03
      ],
      trueAnswer: this.trueAnswer
    };

    if(this.testNumber == 1){
      this.changeTestService.changeTest01(testOneQuestion).subscribe(() => {
        this.tests01.splice(this.questionNumber - 1, 1, testOneQuestion);
      });
    }else if(this.testNumber == 2){
      this.changeTestService.changeTest02(testOneQuestion).subscribe(() => {
        this.tests02.splice(this.questionNumber - 1, 1, testOneQuestion);
      });
    }else if(this.testNumber == 3){
      this.changeTestService.changeTest03(testOneQuestion).subscribe(() => {
        this.tests03.splice(this.questionNumber - 1, 1, testOneQuestion);
      });
    }else if(this.testNumber == 4){
      this.changeTestService.changeTest04(testOneQuestion).subscribe(() => {
        this.tests04.splice(this.questionNumber - 1, 1, testOneQuestion);
      });
    }else if(this.testNumber == 5){
      this.changeTestService.changeTest05(testOneQuestion).subscribe(() => {
        this.tests05.splice(this.questionNumber - 1, 1, testOneQuestion);
      });
    }else if(this.testNumber == 6){
      this.changeTestService.changeTest06(testOneQuestion).subscribe(() => {
        this.tests06.splice(this.questionNumber - 1, 1, testOneQuestion);
      });
    }

    this.testNumber = undefined;
    this.questionNumber = undefined;
    this.question = undefined;
    this.answer01 = undefined;
    this.answer02 = undefined;
    this.answer03 = undefined;
    this.trueAnswer = undefined;
  }

}
