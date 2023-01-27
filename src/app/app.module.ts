import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyfirstPracticeComponentComponent } from './myfirst-practice-component/myfirst-practice-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MyfirstPracticeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
