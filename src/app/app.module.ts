import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';
import { HeaderComponent } from './shared/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
