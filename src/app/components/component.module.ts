import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { PageTitlesComponent } from './page-titles/page-titles.component';

import { ArticlesComponent } from './articles/articles.component';
import { UrlFormatPipe } from '../pipes/url-format.pipe';
import { MenuArticleMostViewComponent } from './menu-article-most-view/menu-article-most-view.component';
import { MenuArchivesComponent } from './menu-archives/menu-archives.component';
import { MaterialModule } from '../modules/material.module';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { ListCommentComponent } from './list-comment/list-comment.component';
import { MenuArticleMostCommentComponent } from './menu-article-most-comment/menu-article-most-comment.component';

@NgModule({
  declarations: [
    CategoryMenuComponent,
    PageTitlesComponent,
    ArticlesComponent,
    UrlFormatPipe,
    MenuArticleMostViewComponent,
    MenuArchivesComponent,
    AddCommentsComponent,
    ListCommentComponent,
    MenuArticleMostCommentComponent,
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule, BrowserModule,MaterialModule],
  exports: [
    CategoryMenuComponent,
    PageTitlesComponent,
    ArticlesComponent,
    UrlFormatPipe,
    MenuArticleMostViewComponent,
    MenuArchivesComponent,
    AddCommentsComponent,
    ListCommentComponent,
    MenuArticleMostCommentComponent

  ],
})
export class ComponentModule {}
