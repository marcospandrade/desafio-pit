import { Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';

import { GithubService } from '@core/github/github.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit, OnDestroy {
  private readonly _unsubscribe: Subject<void>;
  columnDefs: ColDef[] = [
    { headerName: 'Login', field: 'login'},
    { headerName: 'Type', field: 'type'},
    { headerName: 'Url', field: 'url'}
  ]

  gridApi;
  gridColumnApi;
  rowDataTeste: Array<{[key: string ]: string }>;

  constructor(
    private _githubService: GithubService
  ) { 
    this._unsubscribe = new Subject();
  }

  ngOnInit(): void {
    this.getUserStatic();
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this._githubService
      .getUser('marcosp')
      .pipe(
        takeUntil(this._unsubscribe)
      )
      .subscribe(response => {
        params.api.setRowData(response.items);
      })
  }

  private getUserStatic(): void {
    this._githubService
      .getUser('marcosp')
      
      .subscribe(response => {
        
        // console.log("marcospandrade");
        // console.log(response.items);
      })
  }

}
