import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { ChangeTestComponent } from './change-test/change-test.component';
import {AppRoutingModule} from './app-routing.module';
import { AllInfoComponent } from './all-info/all-info.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    UsersPageComponent,
    ChangeInfoComponent,
    ChangeTestComponent,
    AllInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
