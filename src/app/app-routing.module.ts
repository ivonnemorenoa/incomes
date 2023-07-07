import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { IncomesComponent } from './incomes/incomes.component';
import { PolicyComponent } from './policy/policy.component';
import { BankComponent } from './components/bank/bank.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  // { path: 'home', component : HomeComponent },
  {
    path: 'incomes',
    loadChildren: () => import('./incomes/incomes.module').then(m => m.IncomesModule)
  },
  // { path: 'policy', component : PolicyComponent },
  // { path: 'status', component : StatusComponent },
  // { path: 'bank', component : BankComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
