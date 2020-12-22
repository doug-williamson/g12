import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RhBlogModule } from '@dougwilliamson/rhombus';
import { BlogRoutingModule } from './blog.routing';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,

		RhBlogModule,

		BlogRoutingModule,
	],
	declarations: [PostComponent, PostsComponent],

})
export class BlogModule { }
