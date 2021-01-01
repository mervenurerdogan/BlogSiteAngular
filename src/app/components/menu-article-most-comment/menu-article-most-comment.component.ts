import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-menu-article-most-comment',
  templateUrl: './menu-article-most-comment.component.html',
  styleUrls: ['./menu-article-most-comment.component.css']
})
export class MenuArticleMostCommentComponent implements OnInit {
articles:Article[]=[];

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {

    this.articles=[];
    this.articleService.getArticleByMostComment().subscribe(data=>{

      console.log(data);
      this.articles=data;
    })
  }

}
