import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes =
[
  {path: '', component: HomeComponent},
  {path: 'lazy', component: HomeComponent, children:
  [
  {path: 'child', component: ChildComponent},
  {path: 'parent', component: ParentComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class LazyModuleRoutingModule { }
