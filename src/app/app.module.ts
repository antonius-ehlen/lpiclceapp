import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LearnComponent } from './learn/learn.component';
import { AufgabeComponent } from './aufgabe/aufgabe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LearnMcComponent } from './learn-mc/learn-mc.component';
import { LearnScComponent } from './learn-sc/learn-sc.component';
import { LearnFiComponent } from './learn-fi/learn-fi.component';
import { LearnAllComponent } from './learn-all/learn-all.component';
import { LearnMcOneComponent } from './learn-mc-one/learn-mc-one.component';
import { LearnScOneComponent } from './learn-sc-one/learn-sc-one.component';
import { LearnFiOneComponent } from './learn-fi-one/learn-fi-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LearnComponent,
    AufgabeComponent,
    LearnMcComponent,
    LearnScComponent,
    LearnFiComponent,
    LearnAllComponent,
    LearnMcOneComponent,
    LearnScOneComponent,
    LearnFiOneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
