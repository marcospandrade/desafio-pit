import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubService } from '@core/github/github.service';

import { ColDef } from 'ag-grid-community';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-ranking',
	templateUrl: './ranking.component.html',
	styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit,OnDestroy {
	private readonly _unsubscribe: Subject<void>;

	columnDefsRankingUser: ColDef[];
	defaultRankingUserColDef;
	rowDataRankingUser;
	gridRankingUserApi;
	gridRankingUserColumnApi;

	columnDefsRankingReps: ColDef[];
	defaultRankingRepsColDef;
	rowDataRankingReps;
	gridRankingRepsApi;
	gridRankingRepsColumnApi;

	constructor(private _githubService: GithubService) {
		this._unsubscribe = new Subject();
		/* ag-grid */
		this.columnDefsRankingUser = [
			{ headerName: 'Login', field: 'login', width: 200 },
			{ headerName: 'Type', field: 'type', width: 200 },
			{ headerName: 'Url', field: 'url', width: 400 }
		];

		this.columnDefsRankingReps = [
			{ headerName: 'name', field: 'name' },
			{ headerName: 'owner', field: 'owner.login' },
			{
				headerName: 'stars',
				field: 'stargazers_count',
				sort: 'desc'
			}
		];

		this.defaultRankingUserColDef = {
			sortable: true,
			resizable: true,
			filter: true,
			flex: 1,
		};

		this.defaultRankingRepsColDef = {
			resizable: true,
			filter: true,
			flex: 1,
			minWidth: 150
		}

		this.rowDataRankingUser = [
			{ login: 'Toyota', type: 'Celica', url: 35000 },
			{ login: 'Ford', type: 'Mondeo', url: 32000 },
			{ login: 'Porsche', type: 'Boxter', url: 72000 },
			{ login: 'Porsche', type: 'Boxter', url: 72000 },
			{ login: 'Porsche', type: 'Boxter', url: 72000 }
		];
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
	}
	
	onGridRankingRepReady(params) {
		this.gridRankingRepsApi = params.api;
		this.gridRankingRepsColumnApi = params.columnApi;
		this.gridRankingRepsApi.sizeColumnsToFit();
		this._githubService
			.getRankingRep()
			.pipe(
				takeUntil(this._unsubscribe)
			)
			.subscribe((response) => {
				this.rowDataRankingReps = response.items
			})
	}

}
