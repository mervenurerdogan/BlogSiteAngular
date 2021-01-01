import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutMeComponent } from '../app/pages/about-me/about-me.component';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { SearchComponent } from './pages/search/search.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminHomeComponent } from './adminPages/admin-home/admin-home.component';
import{AdminArticleComponent} from './adminPages/article/article/article.component';
import { ArticleAddComponent } from './adminPages/article/article-add/article-add.component';
import { ArticleListComponent } from './adminPages/article/article-list/article-list.component';
import { ArticleUpdateComponent } from './adminPages/article/article-update/article-update.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddCategoryComponent } from './adminPages/category/add-category/add-category.component';
import { ListCategoryComponent } from './adminPages/category/list-category/list-category.component';
import { UpdateCategoryComponent } from './adminPages/category/update-category/update-category.component';
import { AddCommentsComponent } from './components/add-comments/add-comments.component';
import { CommentListComponent } from './adminPages/comments/comment-list/comment-list.component';

const routes: Routes = [
  {
    //www.misscoder.com/
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        //www.misscoder.com/home
        path: 'anasayfa',
        component: HomeComponent,
      },
      {
        path: 'sayfa/:page',
        component: HomeComponent,
      },
      {
        path: 'arama/sayfa/:page',
        component: SearchComponent,
      },
      {
        path: 'makale/:title/:id',
        component: ArticleComponent,
      },


      {
        path: 'arsiv/:year/:month/sayfa/:page',
        component: ArchiveComponent,
      },
      {
        path: 'arsiv/:year/:month',
        component: ArchiveComponent,
      },
      {
        path: 'kategori/:name/:id',
        component: CategoryArticlesComponent,
      },
      {
        //eğer seçilen kategoriye ait 15 tane makale varsa sayfalamaya ihtiyaç duyuyoruz
        path: 'kategori/:name/:id/sayfa/:page',
        component: CategoryArticlesComponent,
      },

      {
        //www.misscoder.com/hakkimizda
        path: 'hakkimizda',
        component: AboutMeComponent,
      },
      {
        //www.misscoder.com/iletisim
        path: 'iletisim',
        component: ContactComponent,
      },
      {
        path:"adminlogin",
        component:AdminLoginComponent
      }
    ],
  },

  {
    //www.misscoder.com/admin
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
      {
         //www.misscoder.com/admin/anasayfa
        path: 'anasayfa',
        component: AdminHomeComponent,
      },
      {
        path:'kategori',
        component:AdminArticleComponent,
        children:[
          {
            path:'ekle',
            component:AddCategoryComponent
          },
          {
            path:"liste",
            component:ListCategoryComponent
          },
          {
            path:"guncelle/:id",
            component:UpdateCategoryComponent
          }
        ]
      },
      {
        path:'yorum',
        component:AdminArticleComponent,
        children:[


          {
            path:'liste',
            component:CommentListComponent
          }
        ]


      },

      { //www.misscoder.com/admin/makale
        path:'makale',
        component:AdminArticleComponent,
        children:[
         {
            //www.misscoder.com/admin/makale/ekle
           path:'ekle',
           component:ArticleAddComponent
         },
         {
           //www.misscoder.com/admin/makale/liste
           path:'liste',
           component:ArticleListComponent


         },
         {//www.misscoder.com/admin/makale/guncelle/id
           path:'guncelle/:id',
           component:ArticleUpdateComponent
         }

        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
