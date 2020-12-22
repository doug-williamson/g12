import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@dougwilliamson/rhombus';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	post: IPost;

	constructor(private blogService: BlogService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		if (this.route.snapshot.params['id']) {
			this.blogService.getPost$(this.route.snapshot.params['id']).subscribe(res => {
				this.post = res;
			});
		}
	}

}
