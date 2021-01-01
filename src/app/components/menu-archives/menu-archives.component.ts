import { Component, OnInit } from '@angular/core';

import { Archive } from 'src/app/models/archive';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-menu-archives',
  templateUrl: './menu-archives.component.html',
  styleUrls: ['./menu-archives.component.css']
})
export class MenuArchivesComponent implements OnInit {

  archives:Archive[]=[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {

    this.articleService.getArticlesArchive().subscribe(data=>{
      console.log(data);
      this.archives=data;
    },error=>{
      console.log("Hata var;"+error);
    })
  }

}
