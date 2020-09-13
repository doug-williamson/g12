import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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
