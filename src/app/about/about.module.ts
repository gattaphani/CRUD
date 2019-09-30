import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutRoutingModule } from './about-routing.module';
import { HomeComponent } from './home.component';
import { AddempComponent } from './addemp/addemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, AddempComponent, ListempComponent, UpdateempComponent, LoginComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AboutModule { }
