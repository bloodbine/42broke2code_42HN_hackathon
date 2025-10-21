import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Club1Component } from './club-1/club-1.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'club1', component: Club1Component},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
