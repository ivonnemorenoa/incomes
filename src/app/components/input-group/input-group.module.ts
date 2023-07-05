import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupComponent } from './input-group.component';



@NgModule({
  declarations: [
    InputGroupComponent
  ],
  exports: [
    InputGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InputGroupModule { }
