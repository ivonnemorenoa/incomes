import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {

  constructor() { }

  formbank = new FormGroup({
    bbva : new FormControl('', Validators.required),
    banamex : new FormControl('', Validators.required),
    scotiabank : new FormControl('', Validators.required),
    hsbc : new FormControl('', Validators.required),
  });

}
