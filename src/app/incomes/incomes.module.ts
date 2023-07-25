import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomesComponent } from './incomes.component';
import { InputGroupModule } from '../components/input-group/input-group.module';
import { CurrencyModule } from '../components/currency/currency.module';
import { BankModule } from '../components/bank/bank.module';
import { AmountModule } from '../components/amount/amount.module';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from '../components/table/table.module';

const routes: Routes = [
  {
    path: '',
   component: IncomesComponent,
  }
]

@NgModule({
  declarations: [
    IncomesComponent
  ],
  exports: [
    IncomesComponent
  ],
  imports: [
    RouterModule.forChild( routes ),
    CommonModule,
    InputGroupModule,
    CurrencyModule,
    BankModule,
    AmountModule,
    TableModule,
  ]
})
export class IncomesModule { }
