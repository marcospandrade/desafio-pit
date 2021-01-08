import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// import { AllCommunityModules } from '@ag-grid-community/all-modules';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

	usernameQuery: string;
	usernameFormControl = new FormControl('', [
		Validators.required,
	]);

	repositoryQuery: string;
	repositoryFormControl = new FormControl('', [
		Validators.required,
	]);

	public columnDefsUser;
	public rowDataUser;

	public columnDefsRep;
	public rowDataRep;

	private gridApi;
	private gridColumnApi;
	  
	constructor() { 
		/* ag-grid */
		this.columnDefsUser = [
			{ field: 'make' },
			{ field: 'model' },
			{ field: 'price' }
		];

		this.rowDataUser = [
			{ make: 'Toyota', model: 'Celica', price: 35000 },
			{ make: 'Ford', model: 'Mondeo', price: 32000 },
			{ make: 'Porsche', model: 'Boxter', price: 72000 }
		];

		this.columnDefsRep = [
			{ field: 'make' },
			{ field: 'model' },
			{ field: 'price' }
		];

		this.rowDataRep = [
			{ make: 'Toyota', model: 'Celica', price: 35000 },
			{ make: 'Ford', model: 'Mondeo', price: 32000 },
			{ make: 'Porsche', model: 'Boxter', price: 72000 }
		];
	}

	onGridReady(params) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
	
		params.api.sizeColumnsToFit();
		window.addEventListener('resize', function () {
		  setTimeout(function () {
			params.api.sizeColumnsToFit();
		  });
		});
	
		params.api.sizeColumnsToFit();
	  }
	ngOnInit(): void {
		fetch('https://api.github.com/search/users')
		.then(result => result.json())
		.then(rowData => this.rowDataUser = rowData);
	}
}
