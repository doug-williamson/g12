import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MediaObserver } from '@angular/flex-layout';
import { Streamer } from './streamer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  opened = false;

  displayedColumns: string[] = ['rank', 'team', 'record', 'name'];
  streamers: Streamer[];

  constructor(public media: MediaObserver, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getStreamers().subscribe(data => {
      this.streamers = data.map(e => {
        return { id: e.payload.doc.id,
          ...e.payload.doc.data() as Streamer }
      });
    });
  }

  getStreamers() {
    return this.firestore.collection('streamers').snapshotChanges();
  }

}
