import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {User} from "../../models/User";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/posts/post.service";
import {Post} from "../../models/Post";
import {Comment} from "../../models/Comment";
import {CommentService} from "../../services/comments/comment.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  user: User;
  posts: Post[];
  comments: Comment[];
  id: string;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
    });

    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    });

    this.postService.getPostsByUserId(this.id).subscribe(data => {
      this.posts = data;
    });
  }

  getCommentsByPostId(postId): void {
    this.commentService.getCommentsByPostId(postId).subscribe(data => {
      this.comments = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
