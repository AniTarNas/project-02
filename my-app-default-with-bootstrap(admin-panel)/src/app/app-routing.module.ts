import { Routes, RouterModule} from "@angular/router";
import { NgModule } from '@angular/core';

import {HomePageComponent} from './home-page/home-page.component';
import {AllInfoComponent} from "./all-info/all-info.component";
import {InfoGuard} from "./shared/info.guard";
import {UsersPageComponent} from "./users-page/users-page.component";
import {ChangeInfoComponent} from "./change-info/change-info.component";
import {ChangeTestComponent} from "./change-test/change-test.component";

const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'info', component: AllInfoComponent, canActivate: [InfoGuard], children: [
      { path: 'users', component: UsersPageComponent },
      { path: 'change-info', component: ChangeInfoComponent},
      { path: 'change-test', component: ChangeTestComponent}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
