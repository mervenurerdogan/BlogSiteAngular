import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCommentComponent } from 'src/app/components/list-comment/list-comment.component';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article!: Article;
  category!: Category;
  @ViewChild(ListCommentComponent,{static:false})
  listComponent!:ListCommentComponent;

  constructor(
    public articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articleService.loading = true;
      let id = Number(this.route.snapshot.paramMap.get('id'));
      //url deki id yi snapshot ile takip ediyoruz
      this.articleService.getArticleById(id).subscribe((data) => {
        this.article = data;
        this.category = data.category;


        this.articleService.ArticleViewCountUp(this.article.id).subscribe();

      });
    });
  }

  ReloadCommentList(){
    this.listComponent.reload();
  }
}
