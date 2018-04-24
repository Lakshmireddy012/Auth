import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChartComponent } from './components/chart/chart.component';
import { RoutingModule } from './routing/routing.module';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD2_pBH0RDdeedPZWfw9ThHewvtdJ9d-uw",
    authDomain: "budgetmanagement012.firebaseapp.com",
    databaseURL: "https://budgetmanagement012.firebaseio.com",
    projectId: "budgetmanagement012",
    storageBucket: "budgetmanagement012.appspot.com",
    messagingSenderId: "91638958783"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ChartComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [AuthService,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
