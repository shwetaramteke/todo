import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyfirstPracticeComponentComponent } from './myfirst-practice-component/myfirst-practice-component.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listTodos/listtodos.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MyfirstPracticeComponentComponent,
    LoginComponent,
    ErrorComponent,
    ListtodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
