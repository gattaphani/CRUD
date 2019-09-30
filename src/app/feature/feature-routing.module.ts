import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature.component';


const routes: Routes =
[
  {path: '', component: FeatureComponent},
  {path: 'feature', component: FeatureComponent,
  children:
[
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'about', component: AboutComponent},


]
}

];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
 export class FeatureRoutingModule {

  constructor() {
console.log('feature module');
  }

}
