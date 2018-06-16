import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService} from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'THis is the first post content'},
  //   {title: 'Second Post', content: 'THis is the second post content'},
  //   {title: 'Third Post', content: 'THis is the third post content'}
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;


  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}