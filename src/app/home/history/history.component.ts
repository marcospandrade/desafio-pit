import { Component, OnInit } from '@angular/core';

import { Historic } from '@core/local-storage/local-storage.model';
import { LocalStorageService } from '@core/local-storage/local-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historic: Historic[];
  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this._localStorageService.historic$.subscribe((history) => {
      this.historic = this.sortingByDate([...history]);
      console.log('SORTED', this.historic);
    });
  }

  private sortingByDate = (list: Historic[]): any[] => {
    return list.sort(
      (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
    );
  };
}
