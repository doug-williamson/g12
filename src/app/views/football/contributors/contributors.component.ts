import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  users = [
    {
      name: 'Fantasy World League',
      role: 'Creator, Producer, Play-By-Play, Color Commentary',
      route: '/football/contributors/1'
    },
    {
      name: 'Macdub44',
      role: 'Producer, Play-By-Play, Color Commentary',
      route: '/football/contributors/2'
    },
    {
      name: 'DeezDiabeteez',
      role: 'Play-By-Play, Color Commentary',
      route: '/football/contributors/3'
    },
    {
      name: 'Chuckleberry',
      role: 'Color Commentary',
      route: '/football/contributors/4'
    },
    {
      name: 'Sharpshooter',
      role: 'Play-By-Play, Color Commentary',
      route: '/football/contributors/5'
    },
  ];

  constructor(public media: MediaObserver) { }

  ngOnInit(): void {
  }

}
