import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { GithubService } from '@core/github/github.service';
import { LocalStorageService } from '@core/local-storage/local-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  private readonly _unsubscribe: Subject<void>;

  // usernameQuery: string;
  usernameFormControl = new FormControl('', [Validators.required]);

  repositoryQuery: string;
  repositoryFormControl = new FormControl('', [Validators.required]);

  columnDefsUser;
  rowDataUser;
  dataUser;
  defaultColDef;

  columnDefsRep;
  rowDataRep;
  dataRepo;

  loading: boolean;

  constructor(
    private _githubService: GithubService,
    private localStorageService: LocalStorageService
  ) {
    this._unsubscribe = new Subject();
    /* ag-grid */
    this.columnDefsUser = [
      { headerName: 'ID', field: 'id' },
      { headerName: 'Login', field: 'login' },,
      { headerName: 'Link', field: 'url' },
    ];

    this.defaultColDef = {
      width: 150,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
    };

    this.rowDataUser = [
      { id: 'Toyota', login: 'Celica', url: 35000 },
      { id: 'Ford', login: 'Mondeo', url: 32000 },
      { id: 'Porsche', login: 'Boxter', url: 72000 },
    ];

    this.columnDefsRep = [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
    ];

    this.rowDataRep = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];
  }

  ngOnInit(): void {
    const historic = this.localStorageService.historic;
    if (historic.length > 0) {
      this.usernameFormControl.setValue(historic[historic.length - 1].username);
      this.callingGitUsers();
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  searchUsersGit() {
    if (!this.usernameFormControl.invalid) {
      this.localStorageService.add(this.usernameFormControl.value);
      this.callingGitUsers();
    }
  }

  searchReposGit() {
    if (!this.repositoryFormControl.invalid) {
      alert('Searching...');
    }
  }

  //   onClickNext(value): void {
  //     this.callingGitUsers(value.page);
  //   }

  private callingGitRepos(): void {
    this.loading = true;
    this._githubService
      .getRepos(this.repositoryFormControl.value)
      .pipe(
        takeUntil(this._unsubscribe),
        finalize(() => (this.loading = false))
      )
      .subscribe((response) => {
        this.dataRepo = response
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
        this.dataUser = response;
      });
  }
}
