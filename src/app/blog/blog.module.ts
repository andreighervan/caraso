import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogSidebarComponent } from './components/blog-sidebar/blog-sidebar.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleItemComponent } from './components/articles-list/article-item/article-item.component';


@NgModule({
  declarations: [BlogComponent, BlogSidebarComponent, ArticlesListComponent, ArticleItemComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
