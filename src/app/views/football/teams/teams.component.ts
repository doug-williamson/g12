import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from './team/team';
import { IDynastyYearTeam, TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

	compact$: Observable<boolean>;
	opened = false;

	displayedColumns: string[] = ['rank', 'name', 'wins', 'losses'];
	teams$: Observable<IDynastyYearTeam[]>;

	constructor(private media: MediaObserver, private teamService: TeamsService) { }

	ngOnInit(): void {
		this.compact$ = this.media.asObservable().pipe(
			map(mediaMatch => {
				return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
			}),
		);

		this.teams$ = this.teamService.getTeams$();
	}

}
