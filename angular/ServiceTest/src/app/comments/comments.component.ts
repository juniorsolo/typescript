import { CommentService } from './../comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment} from './comment.modelo';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comentarios: Comment[];

  constructor(private commentsService: CommentService) { }

  ngOnInit() {
    this.commentsService.getComents()
    .subscribe(comments => this.comentarios = comments);
  }

}
