import { Component, Input, OnInit } from '@angular/core';
import { Team } from './team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input()
  team: Team;

  step = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setStep(val: number) {
    this.step = val;
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
