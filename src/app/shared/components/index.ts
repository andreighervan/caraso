import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CategoryWidgetComponent } from './category-widget/category-widget.component';
import { PopularPostsWidgetComponent } from './popular-posts-widget/popular-posts-widget.component';
import { ArchivesWidgetComponent } from './archives-widget/archives-widget.component';
import { TagsWidgetComponent } from './tags-widget/tags-widget.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const components: any[] = [
    BreadcrumbComponent,
    CategoryWidgetComponent,
    PopularPostsWidgetComponent,
    ArchivesWidgetComponent,
    TagsWidgetComponent,
    HeaderComponent,
    FooterComponent];

export * from './breadcrumb/breadcrumb.component';
export * from './header/header.component';
export * from './footer/footer.component';
export * from './category-widget/category-widget.component';
export * from './popular-posts-widget/popular-posts-widget.component';
export * from './archives-widget/archives-widget.component';
export * from './tags-widget/tags-widget.component';
