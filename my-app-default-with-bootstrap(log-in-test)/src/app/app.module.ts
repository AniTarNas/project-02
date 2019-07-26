import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LevelsComponent } from './levels/levels.component';
import { AppRoutingModule } from './app-routing.module';

import { Levels01infoComponent } from './levels01info/levels01info.component';
import { Levels01testComponent } from './levels01test/levels01test.component';
import { Levels02infoComponent } from './levels02info/levels02info.component';
import { Levels02testComponent } from './levels02test/levels02test.component';
import { Level03infoComponent } from './level03info/level03info.component';
import { Level03testComponent } from './level03test/level03test.component';
import { Level04infoComponent } from './level04info/level04info.component';
import { Level04testComponent } from './level04test/level04test.component';
import { Level05infoComponent } from './level05info/level05info.component';
import { Level06infoComponent } from './level06info/level06info.component';
import { Level06testComponent } from './level06test/level06test.component';
import { Level05testComponent } from './level05test/level05test.component';
import {RouterModule} from '@angular/router';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    LevelsComponent,
    Levels01infoComponent,
    Levels01testComponent,
    Levels02infoComponent,
    Levels02testComponent,
    Level03infoComponent,
    Level03testComponent,
    Level04infoComponent,
    Level04testComponent,
    Level05infoComponent,
    Level06infoComponent,
    Level06testComponent,
    Level05testComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
