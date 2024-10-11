import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FordComponent } from './pages/ford/ford.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fiat', component: FiatComponent },
  { path: "audi", component: AudiComponent},
  {path: "ford", component: FordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
