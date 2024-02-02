import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LearnComponent } from './learn/learn.component';
import { AufgabeComponent } from './aufgabe/aufgabe.component';
import { LearnMcComponent } from './learn-mc/learn-mc.component';
import { LearnScComponent } from './learn-sc/learn-sc.component';
import { LearnFiComponent } from './learn-fi/learn-fi.component';
import { LearnAllComponent } from './learn-all/learn-all.component';
import { LearnMcOneComponent } from './learn-mc-one/learn-mc-one.component';
import { LearnScOneComponent } from './learn-sc-one/learn-sc-one.component';
import { LearnFiOneComponent } from './learn-fi-one/learn-fi-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'learn/list/mc', component: LearnMcComponent },
  { path: 'learn/list/sc', component: LearnScComponent },
  { path: 'learn/list/fi', component: LearnFiComponent },
  { path: 'learn/list/all', component: LearnAllComponent },
  { path: 'learn/one/mc', component: LearnMcOneComponent },
  { path: 'learn/one/sc', component: LearnScOneComponent },
  { path: 'learn/one/fi', component: LearnFiOneComponent },
  { path: 'aufgabe', component: AufgabeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
