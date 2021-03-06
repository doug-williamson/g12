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
            name: 'Football',
            children: [
                {
                    name: 'About',
                    route: '/football/about',
                },
                {
                    name: 'Stream',
                    route: '/football/stream',
                },
                {
                    name: 'Teams',
                    route: '/football/teams',
				},
				{
					name: 'Blog',
					route: '/football/blog',
				},
                {
                    name: 'Staff',
                    route: '/football/staff',
                },
            ],
        },
  ];

  constructor(
    private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this._darkMode$ = this.themeService.darkMode$;
  }
}
