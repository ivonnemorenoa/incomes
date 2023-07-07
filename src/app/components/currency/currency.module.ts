import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyComponent
  ],
  exports: [
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CurrencyModule { }
