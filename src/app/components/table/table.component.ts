import { Component } from '@angular/core';

export interface Registro {
	id: number;
	precio: number;
}

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent {

	public registros: Registro[] = []; // Aquí se guardarán los 200 registros

	constructor() {
		for (let i = 0; i <= 200; i++) {
			this.registros.push({
				id: i,
				precio: Math.floor(Math.random() * 14991) + 10,  // Precio aleatorio entre 10 y 15000
			});
		}
	}
}
