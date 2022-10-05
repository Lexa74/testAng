import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { path: 'navigator?tab=0', component: TabsComponent },
    { path: '', component: HomeComponent }

];


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, TabsComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }