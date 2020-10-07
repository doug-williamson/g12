import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  leagues = [
    {
      name: 'G12 Football',
      route: '/football',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
