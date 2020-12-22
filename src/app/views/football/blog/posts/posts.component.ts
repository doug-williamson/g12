import { Component, OnInit } from '@angular/core';
import { IPost } from '@dougwilliamson/rhombus';
import { BlogService } from '../blog.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    posts: IPost[];

    constructor(private blogService: BlogService) { }

    ngOnInit(): void {
        this.blogService.getPosts$().subscribe(res => {
            this.posts = res;
        })
    }

}
