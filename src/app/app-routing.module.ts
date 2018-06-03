import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationStartComponent } from './authentication-start/authentication-start.component';
import { AuthenticationEndComponent } from './authentication-end/authentication-end.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'authentication-start', component: AuthenticationStartComponent},
  { path: 'authentication-end', component: AuthenticationEndComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
