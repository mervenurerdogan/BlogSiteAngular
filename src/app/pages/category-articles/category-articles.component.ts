import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.css']
})
export class CategoryArticlesComponent implements OnInit {
  page:number=1;
  pageSize:number=5;
  articles:Article[]=[];
  totalCount!:number;
  loadingItem:number=5;//placeholder sayısını tutacak kaç card varsa o kadar gelmesini sağlıycak
  ajax: any;
  categoryId!:number;


  constructor(private route:ActivatedRoute,private articleService:ArticleService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
// kategori/name/id burdaki id yi yakalamak istiyoruz
this.articleService.loading=true;
this.articles=[];
this.totalCount=0;
if(params.get("id")){

  this.categoryId=Number(params.get("id"));
}

if(params.get("page")){

  this.page=Number(params.get("page"));

 }

this.articleService.getArticlesWithCategory(
  this.categoryId,
  this.page,
  this.pageSize
  ).subscribe(data=>{

    this.articles=data.articles;
    this.totalCount=data.totalCount;
  });


    })
  }

}
