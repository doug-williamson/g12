import { Component, OnInit } from '@angular/core';
import { RhombusShellNavEntry, RhombusShellThemeService } from '@dougwilliamson/rhombus-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  _darkMode$: Observable<boolean>;
  title = 'G-12';

  navItems: RhombusShellNavEntry[] = [
    {
      name: 'Home',
      route: 'home',
    },
    {
      name: 'Football',
      route: 'football',
    },
    {
      name: 'Podcast',
      route: 'podcast',
    },
    {
      name: 'Contributors',
      route: 'contributors',
    },
    {
      name: 'Streaming',
      route: 'streaming',
    },
    {
      name: 'Upcoming Events',
      route: 'upcoming-events',
    }
  ];

  constructor(
    private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this._darkMode$ = this.themeService.darkMode$;
  }
}
