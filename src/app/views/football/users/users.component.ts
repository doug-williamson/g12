import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      name: 'Rhombus',
      role: 'Oregon',
      avatar: './assets/rhombus_tv.png',
      route: '/football/users/1'
    },
    {
      name: 'Fantasy World League',
      role: 'Nebraska',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/2'
    },
    {
      name: 'Hardcore CFB',
      role: 'Oklahoma',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/3'
    },
    {
      name: 'Macdub',
      role: 'UCF',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/4'
    },
    {
      name: 'Gridiron Greats',
      role: 'Miami',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/5'
    },
    {
      name: 'DeezDiabeteez',
      role: 'South Carolina',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/6'
    },
    {
      name: 'RavensFan',
      role: 'Alabama',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/7'
    },
    {
      name: 'BakerVision',
      role: 'Ohio State',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/8'
    },
    {
      name: 'Yofe',
      role: 'Notre Dame',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/9'
    },
    {
      name: 'Sharpshooter',
      role: 'Clemson',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/10'
    },
    {
      name: 'Chuckleberry',
      role: 'West Virginia',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/11'
    },
    {
      name: 'Emigs',
      role: 'USC',
      // avatar: './assets/rhombus_tv.png',
      route: '/football/users/12'
    }
  ];

  constructor(public media: MediaObserver) { }

  ngOnInit(): void {
  }

}
