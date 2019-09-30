import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';



const routes: Routes =
[
  { path: '', component: HomeComponent,
children:
[

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
