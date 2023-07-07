import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './bank.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BankComponent
  ],
  exports: [
    BankComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
}) 
export class BankModule { }
