import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IncomesComponent } from './incomes/incomes.component';
import { StatusComponent } from './status/status.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { AmountComponent } from './components/amount/amount.component';
import { InputGroupModule } from './components/input-group/input-group.module';
import { BankComponent } from './components/bank/bank.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IncomesComponent,
    StatusComponent,
    HomeComponent,
    PolicyComponent,
    BankComponent,
    AmountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
