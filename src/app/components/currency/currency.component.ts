import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  
    constructor() { }
    
    formcurrency = new FormGroup({
      usd : new FormControl('', Validators.required),
      mxn : new FormControl('', Validators.required),
    });


}
