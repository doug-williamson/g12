import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IBacklog, ILatestNews } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  compact$: Observable<boolean>;
  latestNews: ILatestNews[];
  backlog: IBacklog[];

  leagues = [
    {
      name: 'G12 Football',
      route: '/football',
    }
  ];

  constructor(private media: MediaObserver, private homeService: HomeService) { }

  ngOnInit(): void {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.homeService.getBacklog$().subscribe(res => {
      this.backlog = res;
    });

    this.homeService.getLatestNews$().subscribe(res => {
        this.latestNews = res;
    });
  }

}
