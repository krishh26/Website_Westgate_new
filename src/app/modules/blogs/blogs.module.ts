import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'blog-detail', component: BlogDetailComponent }
];

@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogsModule { }
