import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Historic, HistoricKey } from './local-storage.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  historic$: Observable<Historic[]>;

  private _historicEvent: BehaviorSubject<Historic[]>;

  constructor(private _http: HttpClient) {
    this._historicEvent = new BehaviorSubject(this.historic);
    this.historic$ = this._historicEvent.asObservable().pipe(tap(console.warn));
  }

  add(username: string): void {
    const value = this._historicEvent.getValue();
    if (value.length === 5) {
      value.shift();
    }
    value.push({ username, datetime: new Date().toISOString() });
    localStorage.setItem(HistoricKey.SYSTEM_HISTORIC, JSON.stringify(value));
    console.log(value);
    this._historicEvent.next(value);
  }

  get historic(): Historic[] {
    const historic = localStorage.getItem(HistoricKey.SYSTEM_HISTORIC);
    return historic ? JSON.parse(historic) : [];
  }
}
