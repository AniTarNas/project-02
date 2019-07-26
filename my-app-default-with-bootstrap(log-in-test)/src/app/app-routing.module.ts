import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {HomePageComponent} from './home-page/home-page.component';
import {LevelsComponent} from './levels/levels.component';
import {Levels01infoComponent} from './levels01info/levels01info.component';
import {Levels01testComponent} from './levels01test/levels01test.component';
import {Levels02testComponent} from './levels02test/levels02test.component';
import {LevelsGuard} from './shared/levels.guard';
import {Level01Guard} from './shared/level01.guard';
import {Level02Guard} from './shared/level02.guard';
import {Level03testComponent} from './level03test/level03test.component';
import {Level03Guard} from './shared/level03.guard';
import {Level04testComponent} from './level04test/level04test.component';
import {Level04Guard} from './shared/level04.guard';
import {Level05infoComponent} from './level05info/level05info.component';
import {Level05testComponent} from './level05test/level05test.component';
import {Level05Guard} from './shared/level05.guard';
import {Level06infoComponent} from './level06info/level06info.component';
import {Level06testComponent} from './level06test/level06test.component';
import {Level06Guard} from './shared/level06.guard';
import {Levels02infoComponent} from './levels02info/levels02info.component';
import {Level03infoComponent} from './level03info/level03info.component';
import {Level04infoComponent} from './level04info/level04info.component';
import {FinishComponent} from './finish/finish.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'levels', component: LevelsComponent, canActivate: [LevelsGuard], children: [
      {path: 'levels01info', component: Levels01infoComponent, canActivate: [Level01Guard] },
      {path: 'levels01test', component: Levels01testComponent, canActivate: [Level01Guard] },

      {path: 'levels02info', component: Levels02infoComponent, canActivate: [Level02Guard] },
      {path: 'levels02test', component: Levels02testComponent, canActivate: [Level02Guard] },

      {path: 'levels03info', component: Level03infoComponent, canActivate: [Level03Guard] },
      {path: 'levels03test', component: Level03testComponent, canActivate: [Level03Guard] },

      {path: 'levels04info', component: Level04infoComponent, canActivate: [Level04Guard] },
      {path: 'levels04test', component: Level04testComponent, canActivate: [Level04Guard] },

      {path: 'levels05info', component: Level05infoComponent, canActivate: [Level05Guard] },
      {path: 'levels05test', component: Level05testComponent, canActivate: [Level05Guard] },

      {path: 'levels06info', component: Level06infoComponent, canActivate: [Level06Guard] },
      {path: 'levels06test', component: Level06testComponent, canActivate: [Level06Guard] },
    ]},
  { path: 'finish', component: FinishComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
