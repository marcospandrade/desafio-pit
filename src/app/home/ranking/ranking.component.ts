import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ranking',
	templateUrl: './ranking.component.html',
	styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

	public columnDefsRanking;
	public rowDataRanking;

	constructor() {
		/* ag-grid */
		this.columnDefsRanking = [
			{ field: 'make' },
			{ field: 'model' },
			{ field: 'price' }
		];

		this.rowDataRanking = [
			{ make: 'Toyota', model: 'Celica', price: 35000 },
			{ make: 'Ford', model: 'Mondeo', price: 32000 },
			{ make: 'Porsche', model: 'Boxter', price: 72000 },
			{ make: 'Porsche', model: 'Boxter', price: 72000 },
			{ make: 'Porsche', model: 'Boxter', price: 72000 }
		];
	}

	ngOnInit(): void {
	}

}
