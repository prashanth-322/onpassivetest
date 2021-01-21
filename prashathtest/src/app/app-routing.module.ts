import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditComponent } from './project/audit/audit.component';
import { LoginComponent } from './project/login/login.component';
import { RegisterComponent } from './project/register/register.component';
import { DashboardComponent } from './project/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'audit',
    component: AuditComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
