import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class IDynastyYearTeam {
	team: string;
	division: number;
}

export class IDynasty {
	years: IDynastyYear[];
}

export class IDynastyYear {
	standings: IDynastyYearTeam[];
}

@Injectable({
	providedIn: 'root'
})
export class TeamsService {

	teamCollection: AngularFirestoreCollection<IDynastyYearTeam>;

	constructor(private firestore: AngularFirestore) { }

	getTeams$(): Observable<IDynastyYearTeam[]> {
		this.teamCollection = this.firestore.collection<IDynasty>('ncaaf14-dynasty').doc('AGuaX7OQDUU3QHiBQFs5').collection<IDynastyYear>('years').doc('kpqA83Me3r8eT2oLFmje').collection<IDynastyYearTeam>('standings', ref => ref.orderBy('team'));

		return this.teamCollection.snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const data = a.payload.doc.data() as IDynastyYearTeam;
				const id = a.payload.doc.id;

				return { id, ...data };
		})));
	}


}
