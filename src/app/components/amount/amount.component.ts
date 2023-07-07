import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent {

  constructor() { }
  
    formamount = new FormGroup({
      amount  : new FormControl('', Validators.required),
    });

}
