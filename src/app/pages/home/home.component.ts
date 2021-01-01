import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.ajax !== null) {
      //ajax isteği gitmiş ise

      this.ajax.unsubscribe(); //varsa istek takip etme
    }

    console.log('Başka bir sayfaya geçildi...');
  }

  page: number = 1;
  pageSize: number = 5;
  articles!: Article[];
  totalCount!: number;
  loadingItem: number = 5; //placeholder sayısını tutacak kaç card varsa o kadar gelmesini sağlıycak
  ajax: any;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.totalCount >= this.page * this.pageSize) {
      //totalcount 12 olsun sayfa 1 de  12>= 1.5
      //sayfa 2 için 12>=2.5   12 hala büyük
      // sayfa 3 için 12>=3.5 12 büyük olmadığı için  else durumuna geçer
      //totalcount büyük  olduğu sürece placeholder 5 adet verilecek
      this.loadingItem = 5;
    } else {
      this.loadingItem = this.totalCount - (this.page - 1) * this.pageSize;
    }

    this.route.paramMap.subscribe((params) => {
      if (params.get('page')) {
        this.page = Number(params.get('page'));
      }

      this.articles = [];
      this.totalCount = 0;

      this.ajax = this.articleService
        .getArticles(this.page, this.pageSize)
        .subscribe((data) => {
          console.log(data);
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }
}
