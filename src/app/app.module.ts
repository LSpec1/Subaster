import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PublishComponent } from './publish/publish.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { UsComponent } from './us/us.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublishComponent,
    HeaderComponent,
    NavbarComponent,
    UsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
    GoogleMapsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
