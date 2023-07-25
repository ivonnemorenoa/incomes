import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SystemCatalog } from 'src/app/shared/lib/system-catalog';
import { buildFormArrayOptionsForm } from '../components/form-control-checkbox/form-control-checkbox.component';
// import { ControlSelect, FormSelect, buildFormSelect } from '../components/form-control-select/form-control-select.component';

// export interface IncomeForm {
//   bankname: FormArray<FormControl<string | null>>;
//   amount: FormControl<string | null>;
//   currency: FormControl<string | null>;
// }

// export interface IncomeFormValue {
//   bankname: ControlSelect[],
//   amount: string,
//   currency: string,
// }

// export type ServiceType = 'CITIBANAMEX' | 'BBVA' | 'SCOTIABANK' | 'HSBC';
@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})

export class IncomesComponent {

  // public get bankname() { return this.form.get('bankname') as FormArray; }
  // public get amount() { return this.form.get('amount') as FormControl; }
  // public get currency() { return this.form.get('currency') as FormControl; }



  // public form: any = FormGroup<IncomeForm>;


  // constructor(
  //   private formBuilder: FormBuilder
  // ) {
  //   this.form = this.formBuilder.group<IncomeForm>({
			
  //     bankname: buildFormArrayOptionsForm<string>([{
	// 			key: 'bank1',
	// 			description: 'CITIBANAMEX'
	// 		},
	// 		{
	// 			key: 'bank2',
	// 			description: 'BBVA'
	// 		},
  //     {
	// 			key: 'bank3',
	// 			description: 'SCOTIABANK'
	// 		}
	// 		], ['bank1']),
  //     amount: new FormControl('', [Validators.required]),
  //     currency: new FormControl('', [Validators.required]),
	// 	});

  // };

  // public onSubmit() {
  //   console.log(this.form.value);
  // }
}


