import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PractionerComponent } from './practioner/practioner.component';
import { NewPractionerComponent } from './practioner/new-practioner/new-practioner.component';

const routes: Routes = [
  {path:'',component:PractionerComponent,children:[
    {path:'new-practioner',component:NewPractionerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
