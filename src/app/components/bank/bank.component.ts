import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {

  constructor() { }

  bank = new FormGroup({
    BBVA  : new FormControl('', Validators.required),
  });

}
