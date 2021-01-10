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
export class RankingComponent implements OnInit, OnDestroy {
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
			{ headerName: 'Login', field: 'login', width: 150 },
			{ headerName: 'Followers', field: 'followers_url', width: 350 },
			{ headerName: 'Url', field: 'url', width: 300 }
		];

		this.columnDefsRankingReps = [
			{ headerName: 'Name', field: 'name' },
			{ headerName: 'Owner', field: 'owner.login' },
			{
				headerName: 'Stars',
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
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this._unsubscribe.next();
		this._unsubscribe.complete();
	}

	onGridRankingUsersReady(params) {
		this.gridRankingUserApi = params.api;
		this.gridRankingUserColumnApi = params.columnApi;
		this.gridRankingUserApi.sizeColumnsToFit(400);
		this._githubService
			.getRankingLovedUsers()
			.pipe(
				takeUntil(this._unsubscribe)
			)
			.subscribe((response) => {
				this.rowDataRankingUser = response.items
			})
	}

	onGridRankingRepReady(params) {
		this.gridRankingRepsApi = params.api;
		this.gridRankingRepsColumnApi = params.columnApi;
		this.gridRankingRepsApi.sizeColumnsToFit(400);
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
