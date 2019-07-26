import { Component, OnInit } from '@angular/core';
import {LevelsInfoService} from '../shared/levels-info.service';
import {Info} from '../../../../my-app-default-with-bootstrap(admin-panel)/src/app/shared/class';

@Component({
  selector: 'app-level05info',
  templateUrl: './level05info.component.html',
  styleUrls: ['./level05info.component.css']
})
export class Level05infoComponent implements OnInit {

  levelsInfo: Info[] = [];

  constructor(private levelsInfoService: LevelsInfoService) { }

  ngOnInit() {
    this.levelsInfoService.getLevelsInfo().subscribe((informations: Info[]) => {
      this.levelsInfo = informations;
    });
  }

}
