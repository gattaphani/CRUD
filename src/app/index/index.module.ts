import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [HomeComponent, LoginComponent, NavComponent, RegistrationComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    NavComponent
  ],
  providers: [AuthService, AuthGuard]
})
export class IndexModule {
  constructor() {
    console.log('Index module');
  }
}
