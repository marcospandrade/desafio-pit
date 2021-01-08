import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GithubService } from './../../services/github.service';
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {

	private readonly _unsubscribe: Subject<void>;
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

	teste;

	constructor(private _githubService: GithubService) {
		this._unsubscribe = new Subject();
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

	searchUsersGit() {
		if (!this.usernameFormControl.invalid) {
			this._githubService
			.getUser(this.usernameQuery)
			.pipe(takeUntil(this._unsubscribe))
			.subscribe(response => { 
				this.teste = response 
			})
			console.log(this.teste)
		}
	}

	searchReposGit() {
		if (!this.repositoryFormControl.invalid) {
			alert("Searching...")
		}
	}

	ngOnInit(): void {

	}

	ngOnDestroy(): void {
		this._unsubscribe.next();
		this._unsubscribe.complete();
	}
}
