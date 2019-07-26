import { Component, OnInit } from '@angular/core';
import {ChangeInfoService} from '../shared/change-info.service';
import {Info} from '../shared/class';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  informations: Info[] = [];
  infoID: number;
  infoTitle: string;
  infoText: string;

  constructor(private changeInfoService: ChangeInfoService) { }

  ngOnInit() {
    this.changeInfoService.getInfo().subscribe((informations: Info[]) => {
      this.informations = informations;
    });
  }

  changeInfo(){
    let info: Info = {
      id: this.infoID,
      title: this.infoTitle,
      text: this.infoText,
    };

    this.changeInfoService.changeInfo(info).subscribe(() => {
      this.informations.splice(this.infoID - 1, 1, info);
    });

    this.infoID = undefined;
    this.infoTitle = undefined;
    this.infoText = undefined;
  }
}
