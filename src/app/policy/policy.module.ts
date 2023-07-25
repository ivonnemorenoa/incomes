import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PolicyComponent } from './policy.component';

const routes: Routes = [
  {
    path: '',
   component: PolicyComponent,
  }
]
@NgModule({
  declarations: [

  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
  ]
})
export class PolicyModule { }
