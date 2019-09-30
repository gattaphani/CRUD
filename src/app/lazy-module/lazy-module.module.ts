import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [HomeComponent, ChildComponent, ParentComponent],
  imports: [

  CommonModule,
    LazyModuleRoutingModule
  ],
  exports: [
    HomeComponent,
    ChildComponent,
    ParentComponent
  ]
})
export class LazyModuleModule {
  constructor() {
    console.log('Lazy module');
  }
}
