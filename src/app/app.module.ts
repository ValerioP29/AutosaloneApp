import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FordComponent } from './pages/ford/ford.component';
import { FiatComponent } from './pages/fiat/fiat.component';
const routes: Route[] = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'fiat',
      component: FiatComponent
  },
  {
      path: 'ford',
      component: FordComponent
  },
  {
      path: 'audi',
      component: AudiComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AudiComponent,
    FordComponent,
    FiatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
