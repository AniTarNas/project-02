import { Component, OnInit } from '@angular/core';
import {LevelsInfoService} from '../shared/levels-info.service';
import {Info} from '../../../../my-app-default-with-bootstrap(admin-panel)/src/app/shared/class';

@Component({
  selector: 'app-level03info',
  templateUrl: './level03info.component.html',
  styleUrls: ['./level03info.component.css']
})
export class Level03infoComponent implements OnInit {

  levelsInfo: Info[] = [];

  constructor(private levelsInfoService: LevelsInfoService) { }

  ngOnInit() {
    this.levelsInfoService.getLevelsInfo().subscribe((informations: Info[]) => {
      this.levelsInfo = informations;
    });
  }

}
