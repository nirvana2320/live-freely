import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModuleModule } from './modules/material-module/material-module.module'
import { GlobalsService } from './services/global-state/globals.service';

import { SideNavComponent } from './components/elements/layout/side-nav/side-nav.component';
import { SideBarComponent } from './components/elements/layout/side-bar/side-bar.component';
import { SideBarMainContentComponent } from './components/elements/layout/side-bar-main-content/side-bar-main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SideBarComponent,
    SideBarMainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
