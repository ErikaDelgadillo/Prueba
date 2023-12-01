import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';

const config = {

  apiKey: "AIzaSyDnwWJGWyYa1XagJLSDdvM-ucXBDB9_US0",
  authDomain: "erikadelgadillo-65be6.firebaseapp.com",
  databaseURL: "https://erikadelgadillo-65be6-default-rtdb.firebaseio.com",
  projectId: "erikadelgadillo-65be6",
  storageBucket: "erikadelgadillo-65be6.appspot.com",
  messagingSenderId: "807406618708",
  appId: "1:807406618708:web:3379ef973bdf8272fec5c1"

};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }