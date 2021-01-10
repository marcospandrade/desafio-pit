import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Historic, HistoricKey, HistoricRep } from './local-storage.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  historic$: Observable<Historic[]>;
  historicRep$: Observable<HistoricRep[]>

  private _historicEvent: BehaviorSubject<Historic[]>;
  private _historicRepEvent: BehaviorSubject<HistoricRep[]>;

  constructor(private _http: HttpClient) {
    this._historicEvent = new BehaviorSubject(this.historic);
    this._historicRepEvent = new BehaviorSubject(this.historicRep);

    this.historicRep$ = this._historicRepEvent.asObservable();
    this.historic$ = this._historicEvent.asObservable();
  }

  add(username: string): void {
    const value = this._historicEvent.getValue();
    if (value.length === 5) {
      value.shift();
    }
    value.push({ username, datetime: new Date().toISOString() });
    localStorage.setItem(HistoricKey.SYSTEM_HISTORIC, JSON.stringify(value));
    this._historicEvent.next(value);
  }

  get historic(): Historic[] {
    const historic = localStorage.getItem(HistoricKey.SYSTEM_HISTORIC);
    return historic ? JSON.parse(historic) : [];
  }

  addRep(repository: string): void {
    const value = this._historicRepEvent.getValue();
    if (value.length === 5) {
      value.shift();
    }
    value.push({ repository, datetime: new Date().toISOString() });
    localStorage.setItem(HistoricKey.SYSTEM_HISTORIC_REPOS, JSON.stringify(value));
    this._historicRepEvent.next(value);
  }

  get historicRep(): HistoricRep[] {
    const historicRep = localStorage.getItem(HistoricKey.SYSTEM_HISTORIC_REPOS);
    return historicRep ? JSON.parse(historicRep) : [];
  }
}
