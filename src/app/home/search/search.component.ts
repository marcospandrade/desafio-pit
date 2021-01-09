import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { GithubService } from '@core/github/github.service';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  private readonly _unsubscribe: Subject<void>;

  usernameFormControl = new FormControl('', [Validators.required]);

  repositoryFormControl = new FormControl('', [Validators.required]);

  /*ag-grid*/
  columnDefsUser: ColDef[];
  defaultUserColDef;
  rowDataUser;
  columnDefsRep: ColDef[];
  defaultReposColDef;
  rowDataRep;

  gridUserApi;
  gridUserColumnApi;
  gridRepApi;
  gridRepColumnApi;

  /*--end ag-grid*/

  loading: boolean;
  historicLocal = this.localStorageService.historic;
  historicRepLocal = this.localStorageService.historicRep;

  constructor(
    private _githubService: GithubService,
    private localStorageService: LocalStorageService,
    private datepipe: DatePipe
  ) {
    this.columnDefsUser = [
      { headerName: 'Login', field: 'login', width: 60 },
      { headerName: 'Type', field: 'type', width: 50 },
      { headerName: 'Url', field: 'url' }
    ];

    this.columnDefsRep = [
      { headerName: 'Name', field: 'name' },
      { headerName: 'Owner', field: 'owner.login' },
      {
        headerName: 'Updated At',
        field: 'updated_at',
        sortable: true,
        sort: 'desc'
      }
    ];

    //   this.columnDefsRep.valueFormatter = function(params) {
    //     return datepipe.transform(params.value, 'dd/MM/yyyy');
    // }
    this._unsubscribe = new Subject();

    this.defaultUserColDef = {
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
    };

    this.defaultReposColDef = {
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 150
    }
  }

  ngOnInit(): void {

    if (this.historicLocal.length > 0) {
      this.usernameFormControl.setValue(this.historicLocal[this.historicLocal.length - 1].username);
      this.callingGitUsers();
    }

    if (this.historicRepLocal.length > 0) {
      this.repositoryFormControl.setValue(this.historicRepLocal[this.historicRepLocal.length - 1].repository);
      this.callingGitRepos();
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  onGridUserReady(params) {
    this.gridUserApi = params.api;
    this.gridUserColumnApi = params.columnApi;
    this.gridUserApi.sizeColumnsToFit(400);
    if (this.historicLocal.length > 0) {
      this._githubService
        .getUser(this.usernameFormControl.value)
        .pipe(
          takeUntil(this._unsubscribe),
          finalize(() => (this.loading = false))
        )
        .subscribe((response) => {
          this.rowDataUser = response.items
        });
    }
  }

  onGridRepReady(params) {
    this.gridRepApi = params.api;
    this.gridRepColumnApi = params.columnApi;
    this.gridRepApi.sizeColumnsToFit();
    if (this.historicRepLocal.length > 0) {
      this._githubService
        .getRepos(this.repositoryFormControl.value)
        .pipe(
          takeUntil(this._unsubscribe),
          finalize(() => (this.loading = false))
        )
        .subscribe((response) => {
          this.rowDataRep = response.items
        })
    }
  }

  searchUsersGit() {
    if (!this.usernameFormControl.invalid) {
      this.localStorageService.add(this.usernameFormControl.value);
      this.callingGitUsers();
    }
  }

  searchReposGit() {
    if (!this.repositoryFormControl.invalid) {
      this.localStorageService.addRep(this.repositoryFormControl.value)
      this.callingGitRepos();
    }
  }

  private callingGitRepos(): void {
    this.loading = true;
    this._githubService
      .getRepos(this.repositoryFormControl.value)
      .pipe(
        takeUntil(this._unsubscribe),
        finalize(() => (this.loading = false))
      )
      .subscribe((response) => {
        this.rowDataRep = response.items;
      })
  }

  private callingGitUsers(): void {
    this.loading = true;
    this._githubService
      .getUser(this.usernameFormControl.value)
      .pipe(
        takeUntil(this._unsubscribe),
        finalize(() => (this.loading = false))
      )
      .subscribe((response) => {
        this.rowDataUser = response.items
      });
  }
}