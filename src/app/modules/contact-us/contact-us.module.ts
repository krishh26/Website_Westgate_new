import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactUsModule { }
