import { Component, OnInit } from '@angular/core';
import {LevelsInfoService} from '../shared/levels-info.service';
import {Info} from "../../../../my-app-default-with-bootstrap(admin-panel)/src/app/shared/class";

@Component({
  selector: 'app-levels02info',
  templateUrl: './levels02info.component.html',
  styleUrls: ['./levels02info.component.css']
})
export class Levels02infoComponent implements OnInit {

  levelsInfo: Info[] = [];

  constructor(private levelsInfoService: LevelsInfoService) { }

  ngOnInit() {
    this.levelsInfoService.getLevelsInfo().subscribe((informations: Info[]) => {
      this.levelsInfo = informations;
    });
  }

}
