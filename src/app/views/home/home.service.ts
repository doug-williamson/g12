import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IBacklog } from '@dougwilliamson/rhombus/lib/components/backlog/backlog';
import { ILatestNews } from '@dougwilliamson/rhombus/lib/components/latest-news/latest-news';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  backlogCollection: AngularFirestoreCollection<IBacklog>;
  latestNewsCollection: AngularFirestoreCollection<ILatestNews>;

  constructor(private firestore: AngularFirestore) { }

  getBacklog$(): Observable<IBacklog[]> {
    this.backlogCollection = this.firestore.collection<IBacklog>('backlog', ref => ref.orderBy('status', 'desc'));

    return this.backlogCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IBacklog;
        const id = a.payload.doc.id;
        console.log(data);
        return { id, ...data };
      })));
  }

  getLatestNews$(): Observable<ILatestNews[]> {
    this.latestNewsCollection = this.firestore.collection<ILatestNews>('latest-news', ref => ref.orderBy('timestamp', 'desc'));

    return this.latestNewsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ILatestNews;
        const id = a.payload.doc.id;
        console.log(data);
        return { id, ...data };
      })));
  }
}
