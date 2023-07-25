import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo : './home-page', pathMatch : 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'incomes',
    loadChildren: () => import('./incomes/incomes.module').then(m => m.IncomesModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then(m => m.StatusModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
