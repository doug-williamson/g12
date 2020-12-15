import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Contributor } from './contributor';
import { ContributorsService } from './contributors.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'roles'];
  // dataSource = ELEMENT_DATA;
  contributors: Contributor[];

  constructor(public media: MediaObserver, private contributorsService: ContributorsService) { }

  ngOnInit(): void {
    this.contributorsService.getContributors().subscribe(data => {
      this.contributors = data.map(e => {
        return { id: e.payload.doc.id,
          ...e.payload.doc.data() as Contributor }
      });
    })
  }

}
