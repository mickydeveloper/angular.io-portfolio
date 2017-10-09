import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './pages/home.component';
import { AboutComponent }   from './pages/about.component';
import { ContactComponent }   from './pages/contact.component';


const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  /*{ path: 'project/:name', component: ProjectComponent },*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}