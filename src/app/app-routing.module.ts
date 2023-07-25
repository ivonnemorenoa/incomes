import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { IncomesComponent } from './incomes/incomes.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component : HomeComponent },
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    
  // },
  {
    path: 'incomes',
    loadChildren: () => import('./incomes/incomes.module').then(m => m.IncomesModule),
    
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then(m => m.StatusModule),
  },
  { path: 'policy', component : PolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
