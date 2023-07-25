import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import { InputGroupModule } from '../components/input-group/input-group.module';
import { CurrencyModule } from '../components/currency/currency.module';
import { BankModule } from '../components/bank/bank.module';
import { AmountModule } from '../components/amount/amount.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
   component:StatusComponent,
  }
]
@NgModule({
  declarations: [
    StatusComponent
  ],
  exports: [
    StatusComponent
  ],
  imports: [    
    RouterModule.forChild( routes ),
    CommonModule,
    InputGroupModule,
    CurrencyModule,
    BankModule,
    AmountModule,
  ]
})
export class StatusModule { }
