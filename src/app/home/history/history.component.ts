import { Component, OnInit } from '@angular/core';

import { Historic } from '@core/local-storage/local-storage.model';
import { HistoricRep } from '@core/local-storage/local-storage.model';
import { LocalStorageService } from '@core/local-storage/local-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historic: Historic[];
  historicRepo: HistoricRep[];
  
  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this._localStorageService.historic$.subscribe((history) => {
      this.historic = this.sortingByDate([...history]);
    });

    this._localStorageService.historicRep$.subscribe((historyReps) => {
      this.historicRepo = this.sortingByDate([...historyReps]);
    })
  }

  private sortingByDate = (list: Historic[] | HistoricRep[]): any[] => {
    return list.sort(
      (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
    );
  };
}
