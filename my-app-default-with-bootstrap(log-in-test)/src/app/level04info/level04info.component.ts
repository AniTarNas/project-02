import { Component, OnInit } from '@angular/core';
import {LevelsInfoService} from '../shared/levels-info.service';
import { Info} from '../../../../my-app-default-with-bootstrap(admin-panel)/src/app/shared/class';

@Component({
  selector: 'app-level04info',
  templateUrl: './level04info.component.html',
  styleUrls: ['./level04info.component.css']
})
export class Level04infoComponent implements OnInit {

  levelsInfo: Info[] = [];

  constructor(private levelsInfoService: LevelsInfoService) { }

  ngOnInit() {
    this.levelsInfoService.getLevelsInfo().subscribe((informations: Info[]) => {
      this.levelsInfo = informations;
    });
  }

}
