import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FeatureRoutingModule } from './feature-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [FeatureComponent, LoginComponent, AdminComponent, AboutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
