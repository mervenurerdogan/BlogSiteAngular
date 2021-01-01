import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import{MaterialModule} from '../modules/material.module';
import{ComponentModule} from '../components/component.module';
import{CKEditorModule} from '@ckeditor/ckeditor5-angular';






import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';
import {AdminNavComponent} from '../nav/admin-nav/admin-nav.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminArticleComponent } from './article/article/article.component';
import { ArticleAddComponent } from './article/article-add/article-add.component';
import { ArticleUpdateComponent } from './article/article-update/article-update.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';





@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminArticleComponent,
    ArticleAddComponent,
    ArticleUpdateComponent,
    ArticleListComponent,
    AdminNavComponent,
    AdminLayoutComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    UpdateCategoryComponent,
    CommentListComponent,




  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ComponentModule,
    CKEditorModule

  ]
})
export class AdminModuleModule { }
