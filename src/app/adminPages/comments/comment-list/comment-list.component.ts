import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  displayedColumns: string[] = [
    'articleId',
    'name',
    'contentMain',
    'publishDate',
    'action'
  ];
  dataSource: any;
  comments!: Comment[];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getCommentList().subscribe((data) => {
      this.comments = data;
      this.dataSource = new MatTableDataSource<Comment>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteComment(id:number){

    this.commentService.commentDelete(id).subscribe(data=>{
      let comment=this.comments.filter(x=>x.id==id)[0];
      let index=this.comments.indexOf(comment);

      this.comments.splice(index,1);

      //silindekten sonyfa güncelleme
      this.dataSource=new MatTableDataSource<Comment>(this.comments);
      this.dataSource.paginator = this.paginator;

    })
  }
}
