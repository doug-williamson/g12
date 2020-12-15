import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MediaObserver } from '@angular/flex-layout';
import { Team } from './team/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  opened = false;

  displayedColumns: string[] = ['rank', 'name', 'wins', 'losses'];
  teams: Team[];

  constructor(public media: MediaObserver, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getStreamers().subscribe(data => {
      this.teams = data.map(e => {
        return { id: e.payload.doc.id,
          ...e.payload.doc.data() as Team }
      });
    });
  }

  getStreamers() {
    return this.firestore.collection('teams').snapshotChanges();
  }

}
