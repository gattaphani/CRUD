import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddempComponent } from './addemp/addemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { LoginComponent } from './login/login.component';


const routes: Routes =
[
  {path: '', component: HomeComponent},
  {path: 'about', component: HomeComponent,
children:
[
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListempComponent},
  {path: 'add', component: AddempComponent},
  {path: 'update/:id', component: UpdateempComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
  constructor() {
    console.log('about module');
  }
}
