import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CricketComponent } from './cricket/cricket.component';
import { logger } from './logger';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { LoggerComponent } from './logger/logger.component';
 const routes :Routes = [
  {path:'app',component:AppComponent, children: [
    {path:'cricket',component:CricketComponent}
  ]},
 ];

@NgModule({
  declarations: [
    AppComponent,
    CricketComponent,
    // LoggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
