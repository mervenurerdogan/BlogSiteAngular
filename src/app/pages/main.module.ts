import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from '../components/component.module';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../modules/material.module';



import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';
import { MainNavComponent } from 'src/app/nav/main-nav/main-nav.component';
import { ArticleComponent } from './article/article.component';
import { CategoryArticlesComponent } from './category-articles/category-articles.component';
import { SearchComponent } from './search/search.component';
import { ArchiveComponent } from './archive/archive.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FooterNavComponent } from '../nav/footer-nav/footer-nav.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    ContactComponent,

    MainLayoutComponent,
    MainNavComponent,
    ArticleComponent,
    CategoryArticlesComponent,
    SearchComponent,
    ArchiveComponent,
    AdminLoginComponent,
    FooterNavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ComponentModule,
    AppRoutingModule,

    MaterialModule
  ],
  exports:[
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ComponentModule,
    AppRoutingModule,
FooterNavComponent,
    MaterialModule
  ]
})
export class MainModule {}
