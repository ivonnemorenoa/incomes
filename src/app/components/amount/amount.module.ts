import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AmountComponent } from './amount.component';

@NgModule({
  declarations: [
    AmountComponent
  ],
  exports: [
    AmountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AmountModule { }
