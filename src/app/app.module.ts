import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LearnComponent } from './learn/learn.component';
import { AufgabeComponent } from './aufgabe/aufgabe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LearnComponent,
    AufgabeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
