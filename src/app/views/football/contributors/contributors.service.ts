import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  constructor(private firestore: AngularFirestore) { }

  getContributors() {
    return this.firestore.collection('contributors').snapshotChanges();
  }
}
