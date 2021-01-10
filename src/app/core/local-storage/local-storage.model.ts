export interface Historic {
	username: string;
	datetime: string;
}

export interface HistoricRep {
	repository: string;
	datetime: string;
}

export enum HistoricKey {
	SYSTEM_HISTORIC = 'pit.system.historic',
	SYSTEM_HISTORIC_REPOS = 'pit.system.historic.repos'
}
