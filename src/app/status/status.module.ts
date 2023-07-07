import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import { InputGroupModule } from '../components/input-group/input-group.module';
import { CurrencyModule } from '../components/currency/currency.module';
import { BankModule } from '../components/bank/bank.module';
import { AmountModule } from '../components/amount/amount.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StatusComponent
  ],
  exports: [
    StatusComponent
  ],
  imports: [    
    RouterModule.forChild([{
      path: '',
      component: StatusComponent
    }]),
    CommonModule,
    InputGroupModule,
    CurrencyModule,
    BankModule,
    AmountModule,
  ]
})
export class StatusModule { }
