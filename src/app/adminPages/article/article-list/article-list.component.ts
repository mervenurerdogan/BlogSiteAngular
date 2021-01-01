import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { MaterialModule } from '../../../modules/material.module';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  displayedColumns: string[] = [
    'picture',
    'title',
    'category',
    'commentCount',
    'viewCount',
    'publishDate',
    'action',
  ]; //sutun isimleri
  dataSource: any;
  articles!: Article[];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //viewchild html kısmında componenetleri kullanmamızı sağlar nesne üretip
  //static true dedik çünkü sayfalam değiştikçe değişecek
  //(MatPaginator ) değişken tipi
  //paginator değişkenimiz

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticlesWithOutPage().subscribe((data) => {
      this.articles = data;
      this.dataSource = new MatTableDataSource<Article>(data);

      this.dataSource.paginator = this.paginator;
    });
  }

  deleteArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe((data) => {
      //makalemizi buluyoruz
      let article = this.articles.filter((x) => x.id == id)[0]; //0.cıyı alıyoruz
      let index = this.articles.indexOf(article);

      this.articles.splice(index, 1); //index i bellile olan makaleyi diziden splice ile kaldırıyoruz

      //sildikten sonra sayfamızı güncelliyoruz
      this.dataSource = new MatTableDataSource<Article>(this.articles);

      this.dataSource.paginator = this.paginator;
    });
  }
}
